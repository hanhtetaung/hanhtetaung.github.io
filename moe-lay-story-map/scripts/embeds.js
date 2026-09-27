// ---- SoundCloud embed overlay ----
// Positions real HTML <iframe> embeds ({ x, y, width, height, src }) in
// *world* coordinates, layered over the canvas, so they pan/zoom together
// with the road and sprites.
//
// To add a song to the scene, add one entry to `sceneEmbeds` in scene.js —
// don't edit this file for day-to-day changes.

import { camera } from "./camera.js";
import { sceneEmbeds } from "./scene.js";

const DEFAULT_WIDTH = 600; // SoundCloud's default embed size
const DEFAULT_HEIGHT = 175;

let container = null;
const elements = new Map(); // embed object -> wrapper element

function getContainer() {
  if (container) return container;
  container = document.createElement("div");
  container.id = "embed-layer";
  Object.assign(container.style, {
    position: "fixed",
    inset: "0",
    overflow: "hidden",
    pointerEvents: "none", // let drags/wheel pass through to the canvas...
    zIndex: "10",
  });
  document.body.appendChild(container);
  return container;
}

function createElement(embed) {
  const wrapper = document.createElement("div");
  Object.assign(wrapper.style, {
    position: "absolute",
    top: "0",
    left: "0",
    width: (embed.width ?? DEFAULT_WIDTH) + "px",
    height: (embed.height ?? DEFAULT_HEIGHT) + "px",
    transformOrigin: "top left",
    pointerEvents: "auto", // ...but re-enable them over the embed itself
  });

  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.scrolling = "no";
  iframe.frameBorder = "no";
  iframe.allow = "autoplay; encrypted-media";
  iframe.loading = "lazy";
  iframe.src = embed.src;
  wrapper.appendChild(iframe);

  getContainer().appendChild(wrapper);
  return wrapper;
}

// Call this once per draw (draw.js does this for you) to reposition every
// embed to match the current camera pan/zoom.
export function updateEmbeds() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  for (const embed of sceneEmbeds) {
    const screenX = embed.x * camera.zoom + camera.x;
    const screenY = embed.y * camera.zoom + camera.y;
    const w = (embed.width ?? DEFAULT_WIDTH) * camera.zoom;
    const h = (embed.height ?? DEFAULT_HEIGHT) * camera.zoom;

    // Cull anything fully off-screen: an iframe player is expensive
    // (network request + its own JS), so we don't want a few dozen of
    // them alive at once just because they exist somewhere in the scene.
    const offscreen =
      screenX + w < 0 || screenX > vw || screenY + h < 0 || screenY > vh;

    let el = elements.get(embed);
    if (offscreen) {
      if (el) el.style.display = "none";
      continue;
    }
    if (!el) {
      el = createElement(embed);
      elements.set(embed, el);
    }
    el.style.display = "";
    el.style.transform = `translate(${screenX}px, ${screenY}px) scale(${camera.zoom})`;
  }
}
