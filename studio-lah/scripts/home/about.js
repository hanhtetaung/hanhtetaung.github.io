import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
        display: none;
        overflow: hidden;
        height: 95dvh;
        padding-bottom: 520rem;
        transition: background 0.05s ease;

        @media (min-width: ${TABLET}) {
            display: block;
        }
    }

  section {
    width: min(100%, 144rem);
    height: 100%;
    margin-inline: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
    width: 100%;
  }

  h1 img {
    width: 100%;
    height: auto;
  }

  img {
    width: 60%;
    height: auto;
  }

  p {
    margin: 0;
    max-width: 72rem;
    margin-inline: auto;
  }
`;

const template = /* html */ `
  <section>
    <h1>
        <img src=${asset("./assets/studio-lah-title.svg")} alt="Studio LAH">
    </h1>
    
    <img src=${asset("./assets/hero-text.svg")} alt="We Create. We Present">
</section>
`;

function script(shadowRoot) {
  const host = shadowRoot.host;

  const startColor = [245, 60, 50]; // #ff1d14
  const endColor = [255, 255, 255]; // white

  let targetProgress = 0; // where scroll says we should be
  let currentProgress = 0; // where we actually are (eased)
  let ticking = false;
  let rafId = null;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function calcTargetProgress() {
    const rect = host.getBoundingClientRect();
    const height = rect.height;
    const scrolled = -rect.top;
    return Math.min(Math.max(scrolled / (height * 0.05), 0), 1);
  }

  function applyColor(progress) {
    const r = Math.round(lerp(startColor[0], endColor[0], progress));
    const g = Math.round(lerp(startColor[1], endColor[1], progress));
    const b = Math.round(lerp(startColor[2], endColor[2], progress));
    host.style.background = `rgb(${r}, ${g}, ${b})`;
  }

  function animate() {
    // ease current progress toward target — smaller factor = smoother/slower catch-up
    const ease = 0.12;
    currentProgress += (targetProgress - currentProgress) * ease;

    applyColor(currentProgress);

    // keep animating until we're basically caught up
    if (Math.abs(targetProgress - currentProgress) > 0.001) {
      rafId = requestAnimationFrame(animate);
    } else {
      currentProgress = targetProgress;
      applyColor(currentProgress);
      ticking = false;
    }
  }

  function onScroll() {
    targetProgress = calcTargetProgress();

    if (!ticking) {
      ticking = true;
      rafId = requestAnimationFrame(animate);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // set initial state on load
  targetProgress = calcTargetProgress();
  currentProgress = targetProgress;
  applyColor(currentProgress);
}

define("section-about", { styles, template, onRender: script });
