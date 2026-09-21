import { $ } from "bun";

function stripJsonComments(str) {
  return str.replace(
    /("(?:[^"\\]|\\.)*")|(\/\*[\s\S]*?\*\/|\/\/.*)/g,
    (match, string) => (string ? string : ""),
  );
}

function computeBase(srcPath, projectPrefix = "") {
  let cleanSrc = srcPath.replace(/^\.\//, "");
  if (projectPrefix) {
    cleanSrc = cleanSrc.replace(new RegExp(`^${projectPrefix}/`), "");
  }
  const depth = cleanSrc.split("/").length - 1;
  return depth > 0 ? "../".repeat(depth) : "./";
}

function injectDataBase(html, base) {
  if (/<html[^>]*\sdata-base=/.test(html)) {
    return html.replace(/(<html[^>]*\sdata-base=")[^"]*(")/, `$1${base}$2`);
  }
  return html.replace(/<html([^>]*)>/, `<html$1 data-base="${base}">`);
}

async function buildPage(srcPath, outPath, projectPrefix = "") {
  const base = computeBase(srcPath, projectPrefix);
  const original = await Bun.file(srcPath).text();
  const patched = injectDataBase(original, base);

  const tempPath = srcPath.replace(/\.html$/, ".__build__.html");
  await Bun.write(tempPath, patched);

  try {
    console.log(`Building ${srcPath} -> ${outPath} (data-base="${base}")`);
    await $`bun build --compile --target=browser --minify-syntax --minify-identifiers ${tempPath} --outfile=${outPath}`;
  } finally {
    await $`rm -f ${tempPath}`;
  }
}

async function copyAssets(src, dest) {
  console.log(`Copying ${src} -> ${dest}`);
  await $`rm -rf ${dest}`;
  await $`cp -r ${src} ${dest}`;
}

const subProjects = ["terra", "map", "maple", "studio-lah"];

async function getMountRoutes() {
  const settingsRaw = await Bun.file(".vscode/settings.json").text();
  const settings = JSON.parse(stripJsonComments(settingsRaw));
  const routes = settings["liveServer.settings.mount"];

  if (!routes) {
    throw new Error(
      '"liveServer.settings.mount" not found in .vscode/settings.json',
    );
  }

  return routes;
}

// Remove any .html files under `dir` that aren't in `expectedSet`,
// skipping subproject dirs (they manage their own output) and non-route dirs like assets.
async function cleanStaleHtml(dir, expectedSet, excludeDirs) {
  const found = await $`find ${dir} -type f -name "*.html"`.text();
  const files = found.split("\n").filter(Boolean);

  for (const file of files) {
    const isExcluded = excludeDirs.some((proj) =>
      file.startsWith(`${dir}/${proj}/`),
    );
    if (isExcluded) continue;

    if (!expectedSet.has(file)) {
      console.log(`Removing stale file: ${file}`);
      await $`rm -f ${file}`;
    }
  }

  // Clean up any now-empty directories left behind (e.g. docs/writings)
  await $`find ${dir} -mindepth 1 -type d -empty -delete`.nothrow();
}

async function buildMain() {
  const routes = await getMountRoutes();

  // Exclude any route that belongs to a subproject (e.g. /terra/about);
  // those are built separately by buildSubProject.
  const rootRoutes = routes.filter(
    ([urlPath]) => !subProjects.some((p) => urlPath.startsWith(`/${p}/`)),
  );

  const allFiles = [
    "./index.html",
    ...rootRoutes.map(([, srcPath]) => srcPath),
  ];

  await $`mkdir -p docs`;

  const expectedOutPaths = new Set(
    allFiles.map((srcPath) => `docs/${srcPath.replace(/^\.\//, "")}`),
  );

  await cleanStaleHtml("docs", expectedOutPaths, subProjects);

  for (const srcPath of allFiles) {
    const outPath = `docs/${srcPath.replace(/^\.\//, "")}`;
    await buildPage(srcPath, outPath);
  }

  await copyAssets("assets", "docs/assets");
}

async function buildSubProject(project) {
  const routes = await getMountRoutes();

  const projectRoutes = routes
    .filter(([urlPath]) => urlPath.startsWith(`/${project}/`))
    .map(([, srcPath]) => srcPath);

  const allFiles = [`./${project}/index.html`, ...projectRoutes];

  await $`mkdir -p docs/${project}`;

  const expectedOutPaths = new Set(
    allFiles.map((srcPath) => `docs/${srcPath.replace(/^\.\//, "")}`),
  );

  await cleanStaleHtml(`docs/${project}`, expectedOutPaths, []);

  for (const srcPath of allFiles) {
    const outPath = `docs/${srcPath.replace(/^\.\//, "")}`;
    await buildPage(srcPath, outPath, project); // ← add project here
  }

  await copyAssets(`${project}/assets`, `docs/${project}/assets`);
}
// --- CLI entry ---
const target = process.argv[2];

if (target === "main") {
  await buildMain();
} else if (target && subProjects.includes(target)) {
  await buildSubProject(target);
} else if (!target) {
  console.log("Cleaning docs/...");
  await $`rm -rf docs`;
  await $`mkdir -p docs`;

  await buildMain();
  for (const project of subProjects) {
    await buildSubProject(project);
  }
} else {
  console.error(
    `Unknown target "${target}". Use "main", one of [${subProjects.join(", ")}], or omit for all.`,
  );
  process.exit(1);
}

console.log("Done.");
