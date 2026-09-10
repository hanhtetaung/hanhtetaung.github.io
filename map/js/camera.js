// ---- Camera state ----
import { draw } from "./draw.js";

export const camera = { x: 0, y: 0, zoom: 0.3 };
const MIN_ZOOM = 0,
  MAX_ZOOM = 0.8;

export function zoomAt(screenX, screenY, factor) {
  const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, camera.zoom * factor));

  const worldX = (screenX - camera.x) / camera.zoom;
  const worldY = (screenY - camera.y) / camera.zoom;

  camera.zoom = newZoom;
  camera.x = screenX - worldX * camera.zoom;
  camera.y = screenY - worldY * camera.zoom;

  draw();
}
