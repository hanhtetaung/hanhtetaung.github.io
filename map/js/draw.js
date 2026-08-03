// ---- Drawing ----
// This is the only file that draws onto the canvas. It just reads
// state prepared elsewhere (camera.js, road.js, assets.js) and renders it.

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

function drawObjects() {
  ctx.drawImage(cow, 150, 200);
  ctx.drawImage(human, 400, 180);
}
