// ---- Scene content ----
// This is the file to edit day-to-day: the road's shape, and what's drawn.
//
// To add a new image to the canvas:
//   1. Drop the file in /assets, named with hyphens — e.g. assets/some-new.svg
//      (.svg or .avif both work, it's tried automatically)
//   2. Add one line inside drawObjects():
//        ctx.drawImage(asset('some_new'), x, y);

import { ctx } from "./main.js";
import { asset } from "./assets.js";

export const roadInstructions = [
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
  { curve: -90 },
  { straight: 6 },
  { curve: 60 },
  { straight: 5 },
  { curve: 30 },
  { straight: 5 },
  { curve: 90 },
  { straight: 14 },
  { curve: 90 },
  { straight: 3 },
  { curve: -90 },
  { straight: 10 },
  { curve: -40 },
  { straight: 5 },
  { curve: 40 },
  { straight: 8 },
  { curve: -60 },
  { straight: 2 },
  { curve: -30 },
  { straight: 2 },
  { curve: 90 },
  { straight: 5 },
  { curve: 90 },
  { straight: 2 },
  { curve: 30 },
  { straight: 2 },
  { curve: -50 },
  { curve: -70 },
  { straight: 10 },
  { curve: -90 },
  { straight: 3 },
  { curve: -30 },
  { curve: 40 },
  { straight: 1 },
  { curve: 80 },
  { straight: 10 },
  { curve: 60 },
  { straight: 3 },
  { curve: 30 },
  { straight: 5 },
  { curve: 90 },
  { straight: 2 },
  { curve: -90 },
  { straight: 5 },
  { curve: 90 },
  { straight: 1 },
  { curve: -90 },
  { straight: 5 },
  { curve: -90 },
  { straight: 7 },
  { curve: 60 },
  { straight: 2 },
  { curve: 90 },
  { straight: 5 },
  { curve: 30 },
  { straight: 9 },
  { curve: -90 },
  { straight: 4 },
  { curve: 90 },
  { straight: 4 },
  { curve: -90 },
  { straight: 2 },
  { curve: 90 },
  { straight: 15 },
  { curve: 90 },
  { straight: 1 },
  { curve: -90 },
  { straight: 5 },
  { curve: 40 },
  { curve: -40 },
  { straight: 5 },
  { curve: -90 },
  { straight: 5 },
  { curve: -90 },
  { straight: 5 },
  { curve: 90 },
];

export function drawObjects() {
  ctx.drawImage(asset("06_03_2023"), 0, 280);
  ctx.drawImage(asset("bangkok_sign"), 250, 100);
  ctx.drawImage(asset("airasia_plane"), 250, -350);
  ctx.drawImage(asset("bkk_taxi"), 800, 400);
  ctx.drawImage(asset("gate_6"), 350, 480);
  ctx.drawImage(asset("roses"), 250, 500);
  ctx.drawImage(asset("red-luggage"), 700, 200);

  ctx.drawImage(asset("07_03_2023"), 1500, -50);
  ctx.drawImage(asset("the_sun"), 1550, -400);
  ctx.drawImage(asset("ayutthaya_temple"), 1850, -1050);
  ctx.drawImage(asset("kaffa_bistro"), 1900, 0);
  ctx.drawImage(asset("crocs"), 4000, 0);
  ctx.drawImage(asset("crocs-1"), 3350, -320);
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
  ctx.drawImage(asset("j-o-chula"), 5350, 2000);
  ctx.drawImage(asset("iconsiam"), 3400, 1300);
  ctx.drawImage(asset("grand_palace"), 5750, 1700);
  ctx.drawImage(asset("cl_building"), 2050, 1400);
  ctx.drawImage(asset("khao_san_sign"), 3050, 1950);
  ctx.drawImage(asset("leo_beer"), 3000, 2050);
  ctx.drawImage(asset("red_luggage"), 1900, 2350);

  ctx.drawImage(asset("23_03_2023"), 1350, 2750);
  ctx.drawImage(asset("merlion"), 1850, 2850);
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
  ctx.drawImage(asset("blue-back-bag"), 600, 4220);
  ctx.drawImage(asset("gray-luggage"), 500, 4200);

  ctx.drawImage(asset("26_03_2024"), -250, 3300);
  ctx.drawImage(asset("telephone-chiang-mai"), -650, 3200);
  ctx.drawImage(asset("mon_jam"), -750, 2300);
  ctx.drawImage(asset("wine_chocolate"), -500, 2900);
  ctx.drawImage(asset("tha-phae-gate"), -2850, 2800);
  ctx.drawImage(asset("sun-rays-cafe"), -2050, 2100);
  ctx.drawImage(asset("khao-soi-shop"), -2500, 2350);
  ctx.drawImage(asset("bus-to-chiang-rai"), -3000, 1550);

  ctx.drawImage(asset("31-03-2024"), -3250, 1050);
  ctx.drawImage(asset("choui-fong"), -3400, 750);
  ctx.drawImage(asset("macha"), -3400, 600);
  ctx.drawImage(asset("golden-triangle"), -4000, 300);
  ctx.drawImage(asset("white-temple"), -4500, -700);

  ctx.drawImage(asset("02-04-2024"), -5700, -950);

  ctx.drawImage(asset("03-04-2024"), -5870, -2100);
  ctx.drawImage(asset("seafood-pattaya"), -5700, -2400);

  ctx.drawImage(asset("03-04-2024"), -4800, -2930);
  ctx.drawImage(asset("il_juice_bar"), -4400, -3400);
  ctx.drawImage(asset("juices-in-il"), -3750, -3000);
  ctx.drawImage(asset("lobster"), -3420, -2720);
  ctx.drawImage(asset("asiatique"), -3950, -2500);
  ctx.drawImage(asset("BTS"), -2650, -1800);

  ctx.drawImage(asset("26-10-2024"), 0, -1900);
  ctx.drawImage(asset("ice-creams"), 500, -2100);
  ctx.drawImage(asset("howard-bernadette"), 700, -2430);

  ctx.drawImage(asset("22-02-2025"), 1900, -2400);
  ctx.drawImage(asset("momerial-bridge"), 2100, -3500);
  ctx.drawImage(asset("under-armour-hat"), 2600, -2700);

  ctx.drawImage(asset("18-04-2025"), 3280, -4500);
  ctx.drawImage(asset("monopoly-deal"), 3800, -4580);

  ctx.drawImage(asset("24-05-2025"), 4930, -4300);
  ctx.drawImage(asset("the-north-face"), 4850, -4000);

  ctx.drawImage(asset("27-05-2025"), 4550, -2800);
  ctx.drawImage(asset("ban-rak-thai-hotel"), 5050, -2000);
  ctx.drawImage(asset("bun"), 5700, -1300);

  ctx.drawImage(asset("29-05-2025"), 7020, -2800);
  ctx.drawImage(asset("mae-hong-son-sign"), 6530, -3200);
  ctx.drawImage(asset("coffee-CNX"), 6550, -4200);

  ctx.drawImage(asset("20-07-2025"), 7150, -4800);
  ctx.drawImage(asset("pergasingan"), 7700, -4650);

  ctx.drawImage(asset("26-07-2025"), 9650, -3800);
  ctx.drawImage(asset("bob-merlay-wall"), 9930, -3200);
  ctx.drawImage(asset("horse-ride"), 9900, -3500);
  ctx.drawImage(asset("kayak"), 9600, -3300);
  ctx.drawImage(asset("bread"), 9650, -2500);

  ctx.drawImage(asset("01-11-2025"), 8950, -2000);
  ctx.drawImage(asset("scoopy-c12"), 8700, -1750);

  ctx.drawImage(asset("23-11-2025"), 8370, -1200);

  ctx.drawImage(asset("21-12-2025"), 7200, 0);

  ctx.drawImage(asset("24-12-2025"), 7400, 1500);
  ctx.drawImage(asset("cherry-tree"), 7800, 1100);
  ctx.drawImage(asset("highest-spot-in-thailand"), 7800, 1750);

  ctx.drawImage(asset("27-12-2025"), 9050, 1750);

  ctx.drawImage(asset("29-12-2025"), 9050, 3080);
  ctx.drawImage(asset("happy-new-year-maya"), 7700, 3360);
  ctx.drawImage(asset("kindle"), 8500, 3300);
  ctx.drawImage(asset("zinme-tea-house-clock"), 8500, 3600);
  ctx.drawImage(asset("scoopy-c12"), 8000, 3700);

  ctx.drawImage(asset("16-01-2026"), 6100, 4400);
  ctx.drawImage(asset("il-juice-bar"), 5400, 4500);

  ctx.drawImage(asset("17-04-2026"), 3450, 6580);
  ctx.drawImage(asset("twin-tower"), 2500, 5800);

  ctx.drawImage(asset("16-06-2026"), 1000, 5350);
  ctx.drawImage(asset("flowers-sg"), 700, 5250);

  ctx.drawImage(asset("05-09-2026"), -2680, 5350);

  ctx.drawImage(asset("09-09-2026"), -900, 7150);
}
