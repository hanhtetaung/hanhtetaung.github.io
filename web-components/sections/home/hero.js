import { DESKTOP, TABLET } from "../../breakpoints.js";
import { define } from "../../define.js";

const styles = /* css */ `
  :host {
    display: block;
    height: min(calc(100vh - 108px - 10rem), 70rem);
    margin-top: 5rem;

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
      justify-content: space-between;
    }
  }

  #img-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
    align-self: flex-end;
    line-height: 0;
    overflow: hidden;
  }

  img {
    max-height: 25rem;
    width: auto;
    display: block;

    @media (min-width: ${TABLET}) {
      max-height: 35rem;
    }
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

  h1 {
    margin: 0;
    font-size: var(--size-display);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }

  hgroup + p {
    max-width: min(25ch, 90%);
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
      <p>Han Htet Aung | GMT+7</p>
      <h1>Craft Web Interfaces</h1>
    </hgroup>
    <p>Web Designer & Developer who brings hand-drawn illustrations to every site.</p>
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
