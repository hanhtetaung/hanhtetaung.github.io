import { define } from "../lib/define.js";
import { asset } from "../lib/asset.js";

import "./components/footer-nav.js";
import "./components/footer-copyright.js";
import { TABLET } from "./breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  q {
    display: block;
    text-align: center;
  }

  footer {
    width: min(80%, 144rem);
    margin-inline: auto;
    padding-block: 10rem;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  #highlight-wrap {
    position: relative;
    line-height: 0;
    /* overflow: hidden; */
    display: none;
  }

  #highlight-wrap img {
    cursor: none;
  }

  #highlight-lens {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    clip-path: circle(0px at 50% 50%);
  }

  #lens-ring {
    position: absolute;
    box-sizing: border-box;
    width: 20rem;
    height: 20rem;
    border: 0.5px solid var(--color-primary);
    border-radius: 50%;
    pointer-events: none;
    display: none;
  }

  #lens-ring[data-visible="true"] {
    display: block;
  }

  #thank-you,
  #looking-forward {
    display: block;
  }

  @media (min-width: ${TABLET}) {
    #highlight-wrap {
      display: block;
    }

    #thank-you,
    #looking-forward {
      display: none;
    }
  }
`;

const template = /* html */ `
  <footer>

    <div id="highlight-wrap">
      <img id="highlight-base" src=${asset("./assets/images/footer/highlight.png")} alt="Parting phrase">
      <img id="highlight-lens" src=${asset("./assets/images/footer/highlight-with-color.png")} alt="Parting phrase with color" aria-hidden="true">
      <div id="lens-ring"></div>
    </div>

    <img id="thank-you" src=${asset("./assets/images/footer/thank-you.avif")} alt="Thank you phrase">
    <img id="looking-forward" src=${asset("./assets/images/footer/looking-forward.avif")} alt="Parting Phrase">

    <!-- <footer-nav></footer-nav> -->

    <footer-copyright></footer-copyright>
  </footer>
`;

function script(shadowRoot) {
  const footer = shadowRoot.querySelector("footer");
  const img = shadowRoot.getElementById("highlight-base");
  const lensImg = shadowRoot.getElementById("highlight-lens");
  const ring = shadowRoot.getElementById("lens-ring");
  const wrap = shadowRoot.getElementById("highlight-wrap");
  if (!footer || !img || !lensImg || !ring || !wrap) return;

  function onMove(e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ringHalf = ring.offsetWidth / 2;

    ring.style.left = `${x - ringHalf}px`;
    ring.style.top = `${y - ringHalf}px`;

    lensImg.style.clipPath = `circle(${ringHalf}px at ${x}px ${y}px)`;
  }

  function onEnter() {
    ring.setAttribute("data-visible", "true");
  }

  function onLeave() {
    ring.removeAttribute("data-visible");
    lensImg.style.clipPath = "circle(0px at 50% 50%)";
  }

  footer.addEventListener("mousemove", onMove);
  footer.addEventListener("mouseenter", onEnter);
  footer.addEventListener("mouseleave", onLeave);

  return () => {
    footer.removeEventListener("mousemove", onMove);
    footer.removeEventListener("mouseenter", onEnter);
    footer.removeEventListener("mouseleave", onLeave);
  };
}

define("section-footer", { styles, template, onRender: script });
