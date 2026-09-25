import { asset } from "../../lib/asset.js";
import { define } from "../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    margin-block: 20rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 5rem;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media (min-width: ${TABLET}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${DESKTOP}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  li {
  position: relative;
  border: 1px solid var(--color-primary);
  border-radius: 3rem;
  width: 100%;
  text-align: center;
  overflow: hidden;

  @media (min-width: ${TABLET}) {
    cursor: none;
  }
}

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: var(--color-text);
  }

  img.cover {
    width: 100%;
    max-width: 100%;
    height: 20rem;
    object-fit: cover;
    display: block;
  }

 .stack-img {
  display: none;

  @media (min-width: ${TABLET}) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 10rem;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.85);
    transition: opacity 0.25s ease, transform 0.4s ease;
    will-change: transform, opacity;
  }
}
  .stack-img.visible {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  .stack-img.fade-out {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const template = /* html */ `
<section>
  <hgroup>
    <p>[ Recent Crafts ]</p>
    <h2>With Love & Care</h2>
  </hgroup>

  <ul>
    <li class="scrub-item">
      <a href="/studio-lah" target="_blank">
        <img class="cover" 
          src=${asset("./assets/images/home/studio-lah.png")} 
          data-images='${JSON.stringify([
            asset("./assets/images/home/studio-lah-1.png"),
            asset("./assets/images/home/studio-lah-2.png"),
            asset("./assets/images/home/studio-lah-3.png"),
          ])}'
          alt="Studio LAH">
      </a>
    </li>

    <li class="scrub-item">
      <a href="/maple" target="_blank">
        <img class="cover" 
          src=${asset("./assets/images/home/maple-montessori.avif")}
          data-images='${JSON.stringify([
            asset("./assets/images/home/maple-1.png"),
            asset("./assets/images/home/maple-2.png"),
          ])}'
          alt="Maple Montessori">
      </a>
    </li>

    <li class="scrub-item">
      <a href="/map" target="_blank">
        <img class="cover" 
          src=${asset("./assets/images/home/story-map.avif")}
          data-images='${JSON.stringify([
            asset("./assets/images/home/map-1.png"),
            asset("./assets/images/home/map-2.png"),
          ])}'
          alt="Story Map">
      </a>
    </li>

    <li class="scrub-item">
      <a href="https://skssolarmyanmar.com/" target="_blank">
        <img class="cover" 
          src=${asset("./assets/images/home/sks-solar.avif")}
          data-images='${JSON.stringify([
            asset("./assets/images/home/sks-solar-1.png"),
            asset("./assets/images/home/sks-solar-2.png"),
            asset("./assets/images/home/sks-solar-3.png"),
          ])}'
          alt="SKS Solar">
      </a>
    </li>
  </ul>
</section>
`;
function script(shadowRoot) {
  const mediaQuery = window.matchMedia(`(min-width: ${TABLET})`);
  if (!mediaQuery.matches) return; // skip entirely on mobile

  const items = shadowRoot.querySelectorAll(".scrub-item");

  items.forEach((li) => {
    const coverImg = li.querySelector("img.cover");
    const images = JSON.parse(coverImg.dataset.images || "[]");

    if (images.length === 0) return;

    images.forEach((src) => {
      const preloadImg = new Image();
      preloadImg.src = src;
    });

    let currentIndex = 0;
    let lastX = null;
    let lastY = null;
    const moveThreshold = 40;
    const maxStackSize = 4;
    const activeImgs = [];

    function spawnImage(x, y) {
      const imgEl = document.createElement("img");
      imgEl.className = "stack-img";
      imgEl.src = images[currentIndex];
      imgEl.style.left = `${x}px`;
      imgEl.style.top = `${y}px`;
      const rotation = (Math.random() * 16 - 8).toFixed(1);
      imgEl.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0.85)`;

      li.appendChild(imgEl);
      activeImgs.push(imgEl);

      requestAnimationFrame(() => {
        imgEl.classList.add("visible");
        imgEl.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
      });

      if (activeImgs.length > maxStackSize) {
        const oldest = activeImgs.shift();
        removeImage(oldest);
      }

      currentIndex = (currentIndex + 1) % images.length;
    }

    function removeImage(imgEl) {
      imgEl.classList.add("fade-out");
      imgEl.classList.remove("visible");
      setTimeout(() => {
        imgEl.remove();
      }, 300);
    }

    function onMouseMove(e) {
      const rect = li.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastX === null) {
        lastX = x;
        lastY = y;
        spawnImage(x, y);
        return;
      }

      const dist = Math.hypot(x - lastX, y - lastY);

      if (dist > moveThreshold) {
        spawnImage(x, y);
        lastX = x;
        lastY = y;
      }
    }

    function onMouseLeave() {
      lastX = null;
      lastY = null;
      while (activeImgs.length) {
        removeImage(activeImgs.shift());
      }
      currentIndex = 0;
    }

    li.addEventListener("mousemove", onMouseMove);
    li.addEventListener("mouseleave", onMouseLeave);
  });
}

define("section-recent-crafts", { styles, template, onRender: script });
