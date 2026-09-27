// ---- Road path data ----
export let roadPath = [];

export function setRoadPath(newPath) {
  roadPath = newPath;
}

export function generateRoadPath(
  startX,
  startY,
  straightSpacing,
  curveSpacing,
  instructions,
) {
  const points = [{ x: startX, y: startY, curve: false }];
  let angle = 0;

  for (const step of instructions) {
    if (step.straight) {
      for (let i = 0; i < step.straight; i++) {
        const last = points[points.length - 1];
        points.push({
          x: last.x + Math.cos(angle) * straightSpacing,
          y: last.y + Math.sin(angle) * straightSpacing,
          curve: false,
        });
      }
    } else if (step.curve) {
      const turnSteps = 14; // doubled from 7 -> smoother
      const anglePerStep = (step.curve * Math.PI) / 180 / turnSteps;
      for (let i = 0; i < turnSteps; i++) {
        angle += anglePerStep;
        const last = points[points.length - 1];
        points.push({
          x: last.x + Math.cos(angle) * curveSpacing,
          y: last.y + Math.sin(angle) * curveSpacing,
          curve: true, // mark as a curve tile so we can draw it narrower
        });
      }
    }
  }
  return points;
}
