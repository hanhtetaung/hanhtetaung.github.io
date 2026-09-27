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
  { straight: 8 },
  { curve: -90 },
  { curve: -90 },
  { straight: 4 },
  { curve: 90 },
  { straight: 2 },
  { curve: -90 },
  { straight: 4 },
  { curve: -90 },
  { straight: 8 },
  { curve: -90 },
  { curve: 90 },
  { straight: 4 },
  { curve: -90 },
  { straight: 18 },
  { curve: -90 },
  { curve: 90 },
  { curve: -90 },
  { straight: 4 },
  { curve: -90 },
  { curve: 90 },
  { straight: 4 },
];

const sceneObjects = [
  { name: "cl-building", x: 0, y: -600, height: 900 },
  { name: "scoopy", x: 650, y: 100, height: 200 },
  { name: "iconsiam", x: 1450, y: -100, height: 600 },

  { name: "castle", x: 900, y: -650, height: 700 },

  { name: "water-gun", x: 800, y: -650, height: 100 },

  { name: "temple", x: 300, y: -1520, height: 700 },
  { name: "croc-1", x: 800, y: -880, height: 70 },
  { name: "croc-2", x: 1000, y: -870, height: 70 },

  { name: "kayak-boat", x: -950, y: -1700, height: 100 },
  { name: "kayak-padal-1", x: -650, y: -2050, height: 300 },
  { name: "kayak-padal-2", x: -850, y: -2050, height: 300 },
  { name: "life-jacket-1", x: -450, y: -1900, height: 100 },
  { name: "life-jacket-2", x: -550, y: -2050, height: 100 },

  { name: "painting-1", x: -1900, y: -1900, height: 100 },
  { name: "painting-2", x: -1850, y: -2050, height: 100 },

  { name: "naruto", x: -1600, y: -850, height: 250 },
  { name: "bts", x: -1500, y: -350, height: 300 },

  { name: "asiatique", x: -2100, y: 350, height: 700 },

  { name: "deadly-bridge", x: -200, y: 1000, height: 600 },
  { name: "jumper", x: -200, y: 1800, height: 100 },
  { name: "life-jacket-1", x: -350, y: 1700, height: 100 },
  { name: "life-jacket-2", x: 200, y: 1750, height: 100 },

  { name: "marathon-no-123", x: 3050, y: 800, height: 100 },
  { name: "marathon-no-166", x: 3150, y: 700, height: 100 },

  { name: "graduation-cap", x: 3750, y: 0, height: 100 },
  { name: "graduation-gift", x: 3750, y: 150, height: 70 },
  { name: "graduation-gown", x: 3600, y: 150, height: 200 },

  { name: "bicycle", x: 3750, y: -650, height: 200 },
  { name: "alien-at-suvarnabhumi", x: 3000, y: -1750, height: 400 },
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
