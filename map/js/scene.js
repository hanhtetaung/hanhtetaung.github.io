// ---- Scene content ----
// This is the file to edit day-to-day: the road's shape, and what's drawn.
//
// To add a new image to the canvas:
//   1. Drop the file in /assets, named with hyphens — e.g. assets/some-new.svg
//      (.svg or .avif both work, it's tried automatically)
//   2. Add one line inside drawObjects():
//        ctx.drawImage(asset('some_new'), x, y);

const roadInstructions = [
  { straight: 8 },
  { curve: 50 },
  { straight: 6 },
  { curve: -60 },
  { straight: 10 },
  { curve: 40 },
  { straight: 10 },
  { curve: 40 },
  { straight: 10 },
  { curve: 60 },
  { straight: 20 },
];

function drawObjects() {
  ctx.drawImage(asset("human"), 400, 180);
  ctx.drawImage(asset("ayutthaya_temple"), 200, 260);
  ctx.drawImage(asset("tuktuk"), 100, 420);
  ctx.drawImage(asset("cow"), 100, 300);
  ctx.drawImage(asset("victory_monument"), 200, 500);
  ctx.drawImage(asset("plane"), 200, 600);
}
