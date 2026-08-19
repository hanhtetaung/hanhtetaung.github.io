import { $ } from "bun";

function stripJsonComments(str) {
  return str.replace(
    /("(?:[^"\\]|\\.)*")|(\/\*[\s\S]*?\*\/|\/\/.*)/g,
    (match, string) => (string ? string : ""),
  );
}

const settingsRaw = await Bun.file(".vscode/settings.json").text();
const settings = JSON.parse(stripJsonComments(settingsRaw));

const routes = settings["liveServer.settings.mount"];

if (!routes) {
  throw new Error(
    '"liveServer.settings.mount" not found in .vscode/settings.json',
  );
}

const allFiles = ["./index.html", ...routes.map(([, srcPath]) => srcPath)];

console.log("Cleaning docs/...");
await $`rm -rf docs`;
await $`mkdir -p docs`;

for (const srcPath of allFiles) {
  const outPath = `docs/${srcPath.replace(/^\.\//, "")}`;
  console.log(`Building ${srcPath} -> ${outPath}`);
  await $`bun build --compile --target=browser ${srcPath} --outfile=${outPath}`;
}

console.log("Copying assets...");
await $`cp -r assets docs/assets`;

console.log("Done.");
