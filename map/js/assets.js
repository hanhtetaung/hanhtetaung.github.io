// ---- Asset loader ----

const ASSET_EXT = "png"; // <-- set this to whatever your actual image format is

const _imageCache = {};
const _assetReady = {};
const _assetReadyCallbacks = {};

function asset(name) {
  if (_imageCache[name]) return _imageCache[name];

  const img = new Image();
  _imageCache[name] = img;
  _assetReady[name] = false;

  const filename = name.replace(/_/g, "-");

  img.onerror = () => {
    console.warn(`Failed to load assets/${filename}.${ASSET_EXT}`);
  };
  img.onload = () => {
    _assetReady[name] = true;
    if (_assetReadyCallbacks[name]) _assetReadyCallbacks[name]();
    draw();
  };
  img.src = `assets/${filename}.${ASSET_EXT}`;

  return img;
}

function isAssetReady(name) {
  return !!_assetReady[name];
}

function onAssetReady(name, callback) {
  _assetReadyCallbacks[name] = callback;
}
