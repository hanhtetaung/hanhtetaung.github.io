// ---- App setup ----
import { draw } from "./draw.js";

export const canvas = document.getElementById("c");
export const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;

  // Cap the backing-store size: many GPUs/browsers (esp. Safari/WebKit)
  // start corrupting rendering above ~4096px in one dimension, AND above
  // a total area of ~16,777,216px (4096*4096) even if each dimension is
  // individually under that. A wide *and* tall high-DPI window can hit
  // the area limit while staying under the per-dimension limit, which
  // shows up as visual corruption/overlap while the canvas is redrawn
  // (e.g. while panning).
  const MAX_DIM = 4096;
  const MAX_AREA = 4096 * 4096;

  let effectiveDpr = Math.min(
    dpr,
    MAX_DIM / window.innerWidth,
    MAX_DIM / window.innerHeight,
  );
  const area =
    window.innerWidth * effectiveDpr * window.innerHeight * effectiveDpr;
  if (area > MAX_AREA) {
    effectiveDpr *= Math.sqrt(MAX_AREA / area);
  }

  // Backing store is sized in real device pixels (capped)...
  // floor, not round, so we never accidentally exceed the cap by 1px
  canvas.width = Math.floor(window.innerWidth * effectiveDpr);
  canvas.height = Math.floor(window.innerHeight * effectiveDpr);

  // ...but CSS keeps it displayed at logical (CSS) pixel size.
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  // Scale all drawing operations to match the (possibly capped) backing
  // store, so 1 unit in your draw code still equals 1 CSS pixel.
  ctx.setTransform(effectiveDpr, 0, 0, effectiveDpr, 0, 0);

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  draw();
}
window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", resizeCanvas);
