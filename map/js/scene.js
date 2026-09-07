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
  { curve: -30 },
  { straight: 2 },
  { curve: 30 },
  { straight: 5 },
  { curve: 40 },
  { curve: -40 },
  { straight: 5 },
  { curve: 90 },
  { straight: 5 },
  { curve: 90 },
  { straight: 12 },
  { curve: -5 },
  { curve: 5 },
  { curve: -90 },
  { curve: -90 },
  { straight: 12 },
  { curve: 90 },
  { curve: 90 },
  { straight: 20 },
  { curve: 60 },
  { straight: 5 },
  { curve: -30 },
  { curve: -30 },
  { straight: 5 },
  { curve: 60 },
  { curve: 30 },
  { straight: 5 },
];

function drawObjects() {
  ctx.drawImage(asset("06_03_2023"), 0, 280);
  ctx.drawImage(asset("bangkok_sign"), 250, 100);
  ctx.drawImage(asset("airasia_plane"), 250, -350);
  ctx.drawImage(asset("bkk_taxi"), 350, 500);
  ctx.drawImage(asset("roses"), 250, 500);

  ctx.drawImage(asset("07_03_2023"), 1500, -50);
  ctx.drawImage(asset("the_sun"), 1550, -400);
  ctx.drawImage(asset("ayutthaya_temple"), 1850, -1050);
  ctx.drawImage(asset("kaffa_bistro"), 1900, 0);
  ctx.drawImage(asset("cherry_dessert"), 2600, -100);
  ctx.drawImage(asset("orange_juice"), 2750, -100);
  ctx.drawImage(asset("boat_ayutthaya"), 3050, -50);
  ctx.drawImage(asset("elephant"), 3600, -550);
  ctx.drawImage(asset("train_station_ayutthaya"), 4400, -200);
  ctx.drawImage(asset("train_ayutthaya"), 5200, 500);

  ctx.drawImage(asset("07_03_2023"), 5800, 1100);
  ctx.drawImage(asset("tuktuk"), 6000, 1400);
  ctx.drawImage(asset("il_juice_bar"), 5150, 1400);
  ctx.drawImage(asset("sunglasses"), 5150, 2000);
  ctx.drawImage(asset("iconsiam"), 3400, 1300);
  ctx.drawImage(asset("grand_palace"), 5750, 1700);
  ctx.drawImage(asset("cl_building"), 2050, 1400);
  ctx.drawImage(asset("khao_san_sign"), 3050, 1950);
  ctx.drawImage(asset("leo_beer"), 3000, 2050);
  ctx.drawImage(asset("red_luggage"), 1900, 2350);

  ctx.drawImage(asset("23_03_2023"), 1350, 2750);
  ctx.drawImage(asset("merlion"), 1850, 2550);
  ctx.drawImage(asset("jewel-changi"), 900, 2050);
  ctx.drawImage(asset("marina-bay-sands"), 2700, 2550);
  ctx.drawImage(asset("guitar"), 1850, 3500);
  ctx.drawImage(asset("dinosour-toy"), 2000, 3500);
  ctx.drawImage(asset("hoodie"), 2150, 3500);

  ctx.drawImage(asset("27_10_2023"), 4050, 3850);
  ctx.drawImage(asset("universal-studio"), 3350, 3850);
  ctx.drawImage(asset("cable-car"), 2650, 4050);
  ctx.drawImage(asset("prawn-curry"), 3250, 4650);
  ctx.drawImage(asset("birthday-cake"), 3050, 4650);
  ctx.drawImage(asset("mango-snack"), 3500, 4650);
  ctx.drawImage(asset("panda"), 2050, 4050);
  ctx.drawImage(asset("penguins"), 2150, 4280);
  ctx.drawImage(asset("giraffe"), 1750, 4080);

  ctx.drawImage(asset("25_03_2024"), 750, 4420);

  ctx.drawImage(asset("26_03_2024"), -250, 3300);
}
