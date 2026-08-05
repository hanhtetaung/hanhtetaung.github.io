// ---- Scene content ----
// This is the file to edit day-to-day: the road's shape, and what's drawn.
//
// To add a new image to the canvas:
//   1. Drop the file in /assets, named with hyphens — e.g. assets/some-new.svg
//      (.svg or .avif both work, it's tried automatically)
//   2. Add one line inside drawObjects():
//        ctx.drawImage(asset('some_new'), x, y);

const roadInstructions = [
  { straight: 4 },
  { curve: 60 },
  { straight: 6 },
  { curve: -60 },
  { straight: 10 },
];

function drawObjects() {
  ctx.drawImage(asset("bangkok"), 0, 0);
  ctx.drawImage(asset("dmk"), 500, -550);
  ctx.drawImage(asset("plane"), 900, -550);
  ctx.drawImage(asset("car"), 800, 600);
  ctx.drawImage(asset("pumpkin_soup"), 2000, 700);
}
