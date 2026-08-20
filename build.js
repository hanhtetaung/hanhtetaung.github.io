import { $ } from "bun";

function stripJsonComments(str) {
  return str.replace(
    /("(?:[^"\\]|\\.)*")|(\/\*[\s\S]*?\*\/|\/\/.*)/g,
    (match, string) => (string ? string : ""),
  );
}

function computeBase(srcPath) {
  const cleanSrc = srcPath.replace(/^\.\//, "");
  const depth = cleanSrc.split("/").length - 1;
  return depth > 0 ? "../".repeat(depth) : "./";
}

function injectDataBase(html, base) {
  if (/<html[^>]*\sdata-base=/.test(html)) {
    return html.replace(/(<html[^>]*\sdata-base=")[^"]*(")/, `$1${base}$2`);
  }
  return html.replace(/<html([^>]*)>/, `<html$1 data-base="${base}">`);
}

async function buildPage(srcPath, outPath) {
  const base = computeBase(srcPath);
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

const subProjects = ["terra"];

async function buildMain() {
  const settingsRaw = await Bun.file(".vscode/settings.json").text();
  const settings = JSON.parse(stripJsonComments(settingsRaw));
  const routes = settings["liveServer.settings.mount"];

  if (!routes) {
    throw new Error(
      '"liveServer.settings.mount" not found in .vscode/settings.json',
    );
  }

  const allFiles = ["./index.html", ...routes.map(([, srcPath]) => srcPath)];

  await $`mkdir -p docs`;

  for (const srcPath of allFiles) {
    const outPath = `docs/${srcPath.replace(/^\.\//, "")}`;
    await buildPage(srcPath, outPath);
  }

  await copyAssets("assets", "docs/assets");
}

async function buildSubProject(project) {
  const srcPath = `./${project}/index.html`;
  const outPath = `docs/${project}/index.html`;

  await $`mkdir -p docs/${project}`;
  await buildPage(srcPath, outPath);
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
