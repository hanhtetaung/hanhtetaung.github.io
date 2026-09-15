// ---- App setup ----
import { draw } from "./draw.js";

export const canvas = document.getElementById("c");
export const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;

  // Backing store is sized in real device pixels...
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  // ...but CSS keeps it displayed at logical (CSS) pixel size.
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  // Scale all drawing operations up so 1 unit in your draw code
  // still equals 1 CSS pixel, while actually rendering at full DPI.
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  draw();
}
window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", resizeCanvas);
