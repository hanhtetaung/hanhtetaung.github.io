// ---- Asset loader ----
// Generic image loading/caching. Nothing here is specific to any one
// image — see scene.js to add or draw assets.

const _imageCache = {};
const _assetReadyCallbacks = {};

function asset(name) {
  if (_imageCache[name]) return _imageCache[name];

  const img = new Image();
  _imageCache[name] = img;

  const filename = name.replace(/_/g, "-");
  const extensions = ["svg", "avif", "png", "jpg"];
  let i = 0;

  function tryNextExtension() {
    if (i >= extensions.length) {
      console.warn(
        `No asset found for "${name}" (tried assets/${filename}.[${extensions.join("|")}])`,
      );
      return;
    }
    img.src = `assets/${filename}.${extensions[i]}`;
    i++;
  }

  img.onerror = tryNextExtension;
  img.onload = () => {
    if (_assetReadyCallbacks[name]) _assetReadyCallbacks[name]();
    draw(); // redraw now that this image is actually ready
  };
  tryNextExtension();

  return img;
}

// Lets other files run code once a specific named asset finishes loading.
// (draw.js uses this to regenerate the road path once the road tile is ready,
// since tile spacing depends on the image's real width.)
function onAssetReady(name, callback) {
  _assetReadyCallbacks[name] = callback;
}
