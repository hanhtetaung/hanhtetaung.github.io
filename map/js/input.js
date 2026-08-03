// ---- Input handling (pan + zoom) ----
// Reads/writes camera state (camera.js) and triggers draw() (draw.js).

// -- Pan (mouse drag) --
let dragging = false, lastX = 0, lastY = 0;

canvas.addEventListener('mousedown', e => {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
  canvas.classList.add('dragging');
});

window.addEventListener('mouseup', () => {
  dragging = false;
  canvas.classList.remove('dragging');
});

window.addEventListener('mousemove', e => {
  if (!dragging) return;
  camera.x += e.clientX - lastX;
  camera.y += e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  draw();
});

// -- Zoom (mouse wheel, anchored to cursor) --
canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const factor = e.deltaY < 0 ? 1.1 : 0.9;
  zoomAt(mouseX, mouseY, factor);
}, { passive: false });

// -- Pan (touch drag) + Pinch (touch zoom) --
let lastTouch = null;
let pinchStartDist = null;
let pinchStartZoom = 1;

canvas.addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  } else if (e.touches.length === 2) {
    lastTouch = null; // stop single-finger panning while pinching
    pinchStartDist = getTouchDist(e.touches);
    pinchStartZoom = camera.zoom;
  }
});

canvas.addEventListener('touchmove', e => {
  e.preventDefault();

  if (e.touches.length === 1 && lastTouch) {
    const t = e.touches[0];
    camera.x += t.clientX - lastTouch.x;
    camera.y += t.clientY - lastTouch.y;
    lastTouch = { x: t.clientX, y: t.clientY };
    draw();
  } else if (e.touches.length === 2) {
    const dist = getTouchDist(e.touches);
    const rect = canvas.getBoundingClientRect();
    const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
    const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

    const targetZoom = pinchStartZoom * (dist / pinchStartDist);
    const factor = targetZoom / camera.zoom;
    zoomAt(midX, midY, factor);
  }
}, { passive: false });

canvas.addEventListener('touchend', e => {
  lastTouch = null;
  pinchStartDist = null;
  // if one finger is lifted but one remains, resume panning from that finger
  if (e.touches.length === 1) {
    lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
});

function getTouchDist(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}
