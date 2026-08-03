// ---- Image assets ----
// Put your image/icon files in /assets and reference them here.
const cow = new Image();
cow.src = "assets/cow.svg";

const human = new Image();
human.src = "assets/human.avif";

const road = new Image();
road.src = "assets/road.svg";

const ayutthaya_temple = new Image();
ayutthaya_temple.src = "assets/ayutthaya-temple.svg";

const tuktuk = new Image();
tuktuk.src = "assets/tuktuk.svg";

const victory_monument = new Image();
victory_monument.src = "assets/victory-monument.svg";

let assetsLoadedCount = 0;
const TOTAL_ASSETS = 6;

function onAssetLoad() {
  assetsLoadedCount++;
  if (assetsLoadedCount === TOTAL_ASSETS) {
    onAllAssetsLoaded();
  }
}

cow.onload = onAssetLoad;
human.onload = onAssetLoad;
road.onload = onAssetLoad;
victory_monument.onload = onAssetLoad;
tuktuk.onload = onAssetLoad;
ayutthaya_temple.onload = onAssetLoad;

// Called once every image is ready. Defined here so assets.js stays
// self-contained; it just triggers road generation + the first draw.
function onAllAssetsLoaded() {
  const tileSpacing = road.width * 0.92; // slight overlap so tiles connect with no gap
  const curveSpacing = tileSpacing * 0.5; // tighter spacing through curves = no gap on turns

  roadPath = generateRoadPath(0, 400, tileSpacing, curveSpacing, [
    { straight: 8 },
    { curve: 50 },
    { straight: 6 },
    { curve: -60 },
    { straight: 10 },
    { curve: 40 },
    { straight: 10 },
    { curve: 40 },
    { straight: 10 },
    { curve: 60 },
    { straight: 20 },
  ]);

  draw();
}
