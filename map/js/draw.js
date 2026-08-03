// ---- Draw ----
// The only file that touches the canvas 2D context.
// What gets drawn (drawObjects) and the road's shape (roadInstructions)
// live in scene.js — this file just renders them.

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(camera.x, camera.y);
  ctx.scale(camera.zoom, camera.zoom);

  drawRoad();
  drawObjects();

  ctx.restore();
}

function drawRoad() {
  const road = asset("road");

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

// Builds roadPath from roadInstructions (scene.js) once the road tile image
// has loaded — tile spacing depends on the image's real width.
function updateRoadPath() {
  const road = asset("road");
  const tileSpacing = road.width * 0.92; // slight overlap so tiles connect with no gap
  const curveSpacing = tileSpacing * 0.5; // tighter spacing through curves = no gap on turns

  roadPath = generateRoadPath(
    0,
    400,
    tileSpacing,
    curveSpacing,
    roadInstructions,
  );
}

onAssetReady("road", updateRoadPath);
