// ---- Road path data ----
// roadPath is a list of {x, y} points. It's filled in once the road image
// has loaded (see assets.js), because tile spacing depends on image size.
let roadPath = [];

// Builds a path from a fixed sequence of straight/curve instructions.
//   { straight: N }       walk N tiles forward in the current direction
//   { curve: degrees }    turn gradually by that many degrees
//                         (positive = right turn, negative = left turn)
function generateRoadPath(startX, startY, straightSpacing, curveSpacing, instructions) {
  const points = [{ x: startX, y: startY }];
  let angle = 0; // 0 = pointing right (radians)

  for (const step of instructions) {
    if (step.straight) {
      for (let i = 0; i < step.straight; i++) {
        const last = points[points.length - 1];
        points.push({
          x: last.x + Math.cos(angle) * straightSpacing,
          y: last.y + Math.sin(angle) * straightSpacing,
        });
      }
    } else if (step.curve) {
      const turnSteps = 14; // more steps = smoother curve, no visible gaps
      const anglePerStep = (step.curve * Math.PI / 180) / turnSteps;
      for (let i = 0; i < turnSteps; i++) {
        angle += anglePerStep;
        const last = points[points.length - 1];
        points.push({
          x: last.x + Math.cos(angle) * curveSpacing,
          y: last.y + Math.sin(angle) * curveSpacing,
        });
      }
    }
  }
  return points;
}
