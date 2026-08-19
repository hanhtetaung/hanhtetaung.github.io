const ROOT = new URL("../", import.meta.url);

export function asset(path) {
  return new URL(path, ROOT).href;
}

function getNavRoot() {
  const base = document.documentElement.dataset.base || "./";
  return new URL(base, location.href);
}

export function navHref(path) {
  const clean = path.replace(/^\//, "");
  const isFile = location.protocol === "file:";
  const navRoot = getNavRoot();

  if (clean === "") {
    return isFile ? new URL("index.html", navRoot).href : navRoot.href;
  }

  return isFile
    ? new URL(`${clean}.html`, navRoot).href
    : new URL(clean, navRoot).href;
}
