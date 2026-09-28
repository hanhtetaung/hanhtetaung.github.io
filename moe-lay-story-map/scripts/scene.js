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
  { straight: 10 },
  { curve: -60 },
  { curve: 60 },
  { straight: 4 },
  { curve: -90 },
  { straight: 4 },
  { curve: -90 },
  { curve: 90 },
  { straight: 4 },
];

const sceneObjects = [
  { name: "su-myat", x: -200, y: 200, height: 175 },
  { name: "moe-lay", x: -400, y: 200, height: 200 },

  { name: "jan-2023", x: 0, y: 400, height: 80 },
  { name: "cl-building", x: 0, y: -600, height: 900 },
  { name: "scoopy", x: 650, y: 100, height: 200 },

  { name: "may-2023", x: 1250, y: 300, height: 80 },
  { name: "iconsiam", x: 1450, y: -100, height: 600 },
  { name: "sun-flowers", x: 1650, y: -500, height: 300 },

  { name: "aug-2023", x: 1300, y: -650, height: 80 },
  { name: "castle", x: 900, y: -650, height: 700 },

  { name: "water-gun", x: 800, y: -650, height: 100 },

  { name: "jun-2024", x: 300, y: -800, height: 80 },
  { name: "temple", x: 300, y: -1520, height: 700 },
  { name: "croc-1", x: 800, y: -880, height: 70 },
  { name: "croc-2", x: 1000, y: -870, height: 70 },

  { name: "dec-2024", x: -150, y: -1700, height: 80 },
  { name: "kayak-boat", x: -950, y: -1700, height: 100 },
  { name: "kayak-padal-1", x: -650, y: -2050, height: 300 },
  { name: "kayak-padal-2", x: -850, y: -2050, height: 300 },
  { name: "life-jacket-1", x: -450, y: -1900, height: 100 },
  { name: "life-jacket-2", x: -550, y: -2050, height: 100 },

  { name: "jan-2025", x: -1700, y: -1900, height: 80 },
  { name: "painting-1", x: -1900, y: -1900, height: 100 },
  { name: "painting-2", x: -1850, y: -2050, height: 100 },

  { name: "jun-2025", x: -1800, y: -850, height: 80 },
  { name: "naruto", x: -1600, y: -850, height: 250 },
  { name: "bts", x: -1500, y: -350, height: 300 },

  { name: "sept-2025", x: -1000, y: 50, height: 80 },
  { name: "jurassic-world-entrance", x: -1000, y: 250, height: 300 },
  { name: "jurassic-world", x: -2300, y: 650, height: 600 },

  { name: "nov-2025", x: -450, y: 1500, height: 80 },
  { name: "deadly-bridge", x: -200, y: 1000, height: 600 },
  { name: "jumper", x: -200, y: 1800, height: 100 },
  { name: "life-jacket-1", x: -350, y: 1700, height: 100 },
  { name: "life-jacket-2", x: 200, y: 1750, height: 100 },
  { name: "duck-boat", x: 1100, y: 1400, height: 200 },
  { name: "marathon-no-123", x: 1850, y: 1100, height: 80 },
  { name: "marathon-no-166", x: 1700, y: 1300, height: 80 },
  { name: "marathon-medal-1", x: 1750, y: 1100, height: 140 },
  { name: "marathon-medal-2", x: 1800, y: 1200, height: 90 },
  { name: "dumbbell-1", x: 2300, y: 1000, height: 90 },
  { name: "dumbbell-2", x: 2400, y: 1100, height: 90 },
  { name: "treadmill", x: 2150, y: 1100, height: 250 },

  { name: "jan-2026", x: 3600, y: 600, height: 80 },
  { name: "graduation-cap", x: 3600, y: 0, height: 80 },
  { name: "graduation-gift", x: 3700, y: 60, height: 70 },
  { name: "graduation-gown", x: 3600, y: 150, height: 200 },

  { name: "feb-2026", x: 3650, y: -600, height: 80 },
  { name: "bicycle", x: 3450, y: -650, height: 200 },

  { name: "jun-2026", x: 2650, y: -1250, height: 80 },
  { name: "alien-at-suvarnabhumi", x: 2750, y: -1750, height: 400 },
];

export const sceneEmbeds = [
  {
    x: -700,
    y: -1000,
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1407053104&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",
  },
  {
    x: -1000,
    y: -1300,
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wonton-248173221/ahn-jae-wook-friend-1&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",
  },
  {
    x: 2750,
    y: 1100,
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A142841979&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",
  },
];

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
