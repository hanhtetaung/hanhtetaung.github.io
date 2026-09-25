import { canvas, ctx } from "./main.js";
import { asset, isAssetReady, onAssetReady } from "./assets.js";
import { roadPath, setRoadPath, generateRoadPath } from "./road.js";
import { roadInstructions, drawObjects } from "./scene.js";
import { camera } from "./camera.js";

function getVisibleWorldRect(pad = 0) {
  // canvas.width/height are device pixels (canvas.width = innerWidth * dpr);
  // divide by dpr implicitly by using clientWidth/clientHeight (CSS pixels),
  // since ctx's base transform already accounts for dpr.
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  return {
    left: -camera.x / camera.zoom - pad,
    top: -camera.y / camera.zoom - pad,
    right: (w - camera.x) / camera.zoom + pad,
    bottom: (h - camera.y) / camera.zoom + pad,
  };
}

export function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(camera.x, camera.y);
  ctx.scale(camera.zoom, camera.zoom);

  // Skip smoothing cost when zoomed in a lot — fewer interpolated pixels
  ctx.imageSmoothingEnabled = camera.zoom < 2;

  const view = getVisibleWorldRect(400); // padding so tiles don't pop at edges

  drawRoad(view);
  drawObjects(view);

  ctx.restore();
}

function drawAsset(name, x, y) {
  const img = asset(name);
  if (!isAssetReady(name)) return;
  ctx.drawImage(img, x, y);
}

function drawAssetAtHeight(name, x, y, targetHeight) {
  const img = asset(name);
  if (!isAssetReady(name)) return;

  const scale = targetHeight / img.naturalHeight;
  const targetWidth = img.naturalWidth * scale;

  ctx.drawImage(img, x, y, targetWidth, targetHeight);
}

function drawRoad(view) {
  const road = asset("road", "svg");
  if (!isAssetReady("road")) return;

  for (let i = 0; i < roadPath.length - 1; i++) {
    const p1 = roadPath[i];
    const p2 = roadPath[i + 1];
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;

    if (
      midX < view.left ||
      midX > view.right ||
      midY < view.top ||
      midY > view.bottom
    ) {
      continue; // segment is off-screen, skip the transform+draw entirely
    }

    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    ctx.save();
    ctx.translate(midX, midY);
    ctx.rotate(angle);
    ctx.drawImage(road, -road.width / 2, -road.height / 2);
    ctx.restore();
  }
}

function updateRoadPath() {
  const road = asset("road", "svg");
  const tileSpacing = road.width * 0.92;
  const curveSpacing = tileSpacing * 0.5;

  setRoadPath(
    generateRoadPath(0, 400, tileSpacing, curveSpacing, roadInstructions),
  );
}

onAssetReady("road", updateRoadPath);

export { drawAssetAtHeight };
