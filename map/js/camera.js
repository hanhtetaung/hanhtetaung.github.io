// ---- Camera state ----
// x, y = pan offset (in screen pixels), zoom = scale factor
const camera = { x: 0, y: 0, zoom: 1 };
const MIN_ZOOM = 0.2, MAX_ZOOM = 5;

// Zooms so that the world point currently under (screenX, screenY) stays
// under that same screen point after zooming — used by both wheel and pinch.
function zoomAt(screenX, screenY, factor) {
  const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, camera.zoom * factor));

  const worldX = (screenX - camera.x) / camera.zoom;
  const worldY = (screenY - camera.y) / camera.zoom;

  camera.zoom = newZoom;
  camera.x = screenX - worldX * camera.zoom;
  camera.y = screenY - worldY * camera.zoom;

  draw();
}
