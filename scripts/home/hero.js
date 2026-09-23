import { asset } from "../../lib/asset.js";
import { define } from "../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    height: min(calc(100vh - 108px - 10rem), 70rem);
    margin-top: 5rem;
    overflow: hidden;

    @media (min-width: ${TABLET}) {
      margin-top: 7rem;
    }
  }

  section {
    width: min(80%, 144rem);
    height: min(100%, 60rem);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;

    @media (min-width: ${DESKTOP}) {
      justify-content: end;
    }
  }

  img {
    max-height: 25rem;
    width: auto;
    display: block;

    @media (min-width: ${TABLET}) {
      max-height: 35rem;
    }
  }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
    /* font-size: var(--size-heading); */
  }

  hgroup {
    max-width: min(50ch, 100%);
  }

   #img-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
    align-self: flex-end;
    line-height: 0;
    overflow: hidden;
  }

  #visible-img {
    cursor: auto;

    @media (min-width: ${TABLET}) {
      cursor: none;
    }
  }

  #lens-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    clip-path: circle(0px at 50% 50%);
    display: none;

    @media (min-width: ${TABLET}) {
      display: block;
    }
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

  @media (min-width: ${TABLET}) {
    #lens-ring[data-visible="true"] {
      display: block;
    }
  }

  .hero-title {
    width: 100%;
    height: auto;
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
      <p>Han Htet Aung | GMT+7</p>
       <h1>
         <img class="hero-title" src=${asset("./assets/images/home/hero-title.svg")} alt="Craft Web identity">
       </h1>
      <p>Web Designer & Developer who brings hand-drawn illustrations to create unique experiences.</p>
    </hgroup>

    <div id="img-wrap">
      <img id="visible-img" src="./assets/images/home/walking-holding-luggage.avif" alt="Man walking and holding luggage">
      <img id="lens-img" src="./assets/images/home/walking-holding-luggage-color.avif" alt="Man walking and holding luggage with color" aria-hidden="true">
      <div id="lens-ring"></div>
    </div>
  </section>
`;

const TABLET_QUERY = `(min-width: ${TABLET})`;

function script(shadowRoot) {
  const wrap = shadowRoot.getElementById("img-wrap");
  const img = shadowRoot.getElementById("visible-img");
  const lensImg = shadowRoot.getElementById("lens-img");
  const ring = shadowRoot.getElementById("lens-ring");
  if (!wrap || !img || !lensImg || !ring) return;

  const mql = window.matchMedia(TABLET_QUERY);

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

  function bindLens() {
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);
  }

  function unbindLens() {
    wrap.removeEventListener("mousemove", onMove);
    wrap.removeEventListener("mouseenter", onEnter);
    wrap.removeEventListener("mouseleave", onLeave);
    onLeave(); // reset state if we cross below TABLET mid-hover
  }

  function handleBreakpointChange(e) {
    if (e.matches) {
      bindLens();
    } else {
      unbindLens();
    }
  }

  if (mql.matches) bindLens();
  mql.addEventListener("change", handleBreakpointChange);

  return () => {
    unbindLens();
    mql.removeEventListener("change", handleBreakpointChange);
  };
}

define("section-hero", { styles, template, onRender: script });
