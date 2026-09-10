// ---- App setup ----
import { draw } from "./draw.js";

export const canvas = document.getElementById("c");
export const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
}
window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", resizeCanvas);
