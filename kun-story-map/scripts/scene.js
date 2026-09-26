// ---- Scene content ----
// This is the file to edit day-to-day: the road's shape, and what's drawn.
//
// To add a new image to the canvas:
//   1. Drop the file in /assets, named with hyphens — e.g. assets/some-new.svg
//      (.svg or .avif both work, it's tried automatically)
//   2. Add one line inside drawObjects():
//        ctx.drawImage(asset('some_new'), x, y);

import { drawAssetAtHeight } from "./draw.js";

export const roadInstructions = [
  { straight: 4 },
  { curve: -90 },
  { curve: 90 },
  { straight: 4 },
  { curve: 90 },
  { straight: 8 },
  { straight: 4 },
];

const sceneObjects = [
  { name: "jet-ski", x: 800, y: 280, height: 200 },
  { name: "leo-beer", x: 700, y: 120, height: 100 },
  { name: "noon-old-town", x: 1200, y: -600, height: 600 },
];

export const sceneEmbeds = [];

export function drawObjects(view) {
  for (const { name, x, y, height } of sceneObjects) {
    if (
      x + height < view.left ||
      x - height > view.right ||
      y + height < view.top ||
      y - height > view.bottom
    ) {
      continue;
    }
    drawAssetAtHeight(name, x, y, height);
  }
}
