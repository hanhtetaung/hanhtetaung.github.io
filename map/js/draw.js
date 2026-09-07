function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(camera.x, camera.y);
  ctx.scale(camera.zoom, camera.zoom);

  drawRoad();
  drawObjects();

  ctx.restore();
}

// Safe wrapper: skips drawing (and logs once) instead of throwing on a
// broken or still-loading image.
function drawAsset(name, x, y) {
  const img = asset(name);
  if (!isAssetReady(name)) return;
  ctx.drawImage(img, x, y);
}

function drawRoad() {
  const road = asset("road");
  if (!isAssetReady("road")) return;

  for (let i = 0; i < roadPath.length - 1; i++) {
    const p1 = roadPath[i];
    const p2 = roadPath[i + 1];
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

    ctx.save();
    ctx.translate(midX, midY);
    ctx.rotate(angle);
    ctx.drawImage(road, -road.width / 2, -road.height / 2);
    ctx.restore();
  }
}

function updateRoadPath() {
  const road = asset("road");
  const tileSpacing = road.width * 0.92;
  const curveSpacing = tileSpacing * 0.5;

  roadPath = generateRoadPath(
    0,
    400,
    tileSpacing,
    curveSpacing,
    roadInstructions,
  );
}

onAssetReady("road", updateRoadPath);
