/* ==========================================================================
   app.js — turns ELEMENTS (data.js) into a Cytoscape graph, lays it out
   with fcose, and wires up the click → right-panel interaction.
   Depends on: cytoscape, cytoscape-fcose (loaded as classic scripts),
   ELEMENTS (data.js), CY_STYLE (cy-style.js).
   ========================================================================== */

function toLabel(id) {
  return id
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
ELEMENTS.forEach((e) => {
  e.name = toLabel(e.id);
});

const byId = Object.fromEntries(ELEMENTS.map((e) => [e.id, e]));

function upstreamIds(el) {
  return el.sources || el.components || [];
}
function downstreamIds(el) {
  return ELEMENTS.filter((e) => upstreamIds(e).includes(el.id)).map(
    (e) => e.id,
  );
}

/* Recursively trace an element's components/sources all the way down to
   the raw sources at the bottom of the chain — e.g. Pho -> Water (direct)
   plus Plant and Animal (pulled in through Rice, Beef, Pork, etc). */
function resolveRootSources(el) {
  const result = new Set();
  const visited = new Set();
  function walk(id) {
    if (visited.has(id)) return;
    visited.add(id);
    const e = byId[id];
    if (!e) return;
    if (e.type === "source") {
      result.add(id);
      return;
    }
    upstreamIds(e).forEach(walk);
  }
  upstreamIds(el).forEach(walk);
  return [...result];
}

/* ---- element grouping: one compound container per type ----
        fCoSE treats these as compound parents and clusters their
        children together, the way the fcose compound demo does. */
const GROUPS = [
  { id: "group-source", label: "Sources", type: "source" },
  { id: "group-material", label: "Materials", type: "material" },
  { id: "group-goods", label: "Goods", type: "goods" },
];

const groupNodes = GROUPS.map((g) => ({
  data: { id: g.id, label: g.label, type: g.type, isGroup: true },
}));

/* ---- build leaf nodes, with a 'weight' = connection count,
        used by cy-style.js to size each node like the fcose-gene demo ---- */
const nodes = ELEMENTS.map((e) => {
  const weight = upstreamIds(e).length + downstreamIds(e).length;
  return {
    data: {
      id: e.id,
      label: e.name,
      type: e.type,
      weight: Math.max(1, weight),
      parent: "group-" + e.type,
    },
    classes: "leaf",
  };
});

const edges = [];
ELEMENTS.forEach((e) => {
  upstreamIds(e).forEach((src) => {
    edges.push({ data: { id: src + "__" + e.id, source: src, target: e.id } });
  });
});

/* ---- init cytoscape ---- */
const cy = cytoscape({
  container: document.getElementById("cy"),
  elements: [...groupNodes, ...nodes, ...edges],
  style: CY_STYLE,
  wheelSensitivity: 0.25,
  layout: { name: "preset" }, // real layout is run below
});

const fcoseLayout = () =>
  cy
    .layout({
      name: "fcose",
      quality: "default",
      animate: true,
      animationDuration: 700,
      randomize: true,
      nodeDimensionsIncludeLabels: true,
      nodeSeparation: 120,
      idealEdgeLength: 110,
      nodeRepulsion: 9000,
      edgeElasticity: 0.45,
      gravity: 0.25,
      gravityRange: 3.8,
      numIter: 2500,
      tile: true,
      fit: true,
      padding: 50,
    })
    .run();

fcoseLayout();

/* ---- interaction ---- */
const emptyEl = document.getElementById("empty");
const cardEl = document.getElementById("card");
const typeLabel = { source: "Source", material: "Material", goods: "Goods" };

function clearHighlight() {
  cy.elements().removeClass("dim lit selected");
}

function highlight(node) {
  // predecessors()/successors() walk the full directed chain (nodes + edges),
  // not just one hop — so clicking Pho lights up Beef -> Animal too, not
  // just the elements it's directly wired to.
  const chain = node.predecessors().union(node.successors()).union(node);
  const withGroups = chain.union(chain.ancestors());
  cy.elements().addClass("dim");
  withGroups.removeClass("dim").addClass("lit");
  node.removeClass("dim").addClass("lit selected");
}

function rowItem(id) {
  const e = byId[id];
  const div = document.createElement("div");
  div.className = "row-item " + e.type;
  div.innerHTML = `<span class="dot"></span>${e.name}<span class="rtype">${e.type}</span>`;
  div.addEventListener("click", () => selectNode(id));
  return div;
}

function renderCard(el) {
  document.getElementById("c-kicker").textContent =
    el.type === "source"
      ? "Raw source"
      : el.type === "material"
        ? "Material"
        : "Goods";
  document.getElementById("c-name").textContent = el.name;

  const tag = document.getElementById("c-type");
  tag.className = "type-tag " + el.type;
  document.getElementById("c-type-label").textContent = typeLabel[el.type];

  const fromWrap = document.getElementById("c-from");
  const usedWrap = document.getElementById("c-used");
  fromWrap.innerHTML = "";
  usedWrap.innerHTML = "";

  const ups = upstreamIds(el);
  if (ups.length === 0) {
    fromWrap.innerHTML =
      '<span class="none">Nothing — this is a raw source.</span>';
  } else {
    ups.forEach((id) => fromWrap.appendChild(rowItem(id)));
  }

  const sourcesSection = document.getElementById("c-sources-section");
  const sourcesWrap = document.getElementById("c-sources");
  sourcesWrap.innerHTML = "";
  const roots = resolveRootSources(el);
  const rootsAreNew = roots.some((id) => !ups.includes(id));
  if (roots.length && rootsAreNew) {
    roots.forEach((id) => sourcesWrap.appendChild(rowItem(id)));
    sourcesSection.style.display = "";
  } else {
    sourcesSection.style.display = "none";
  }

  const downs = downstreamIds(el);
  if (downs.length === 0) {
    usedWrap.innerHTML = '<span class="none">Not used in anything yet.</span>';
  } else {
    downs.forEach((id) => usedWrap.appendChild(rowItem(id)));
  }

  emptyEl.style.display = "none";
  cardEl.classList.remove("show");
  void cardEl.offsetWidth; // restart animation
  cardEl.classList.add("show");
}

function selectNode(id) {
  const node = cy.getElementById(id);
  if (node.empty()) return;
  clearHighlight();
  highlight(node);
  renderCard(byId[id]);
  // cy.animate(
  //   { center: { eles: node }, zoom: Math.max(cy.zoom(), 1) },
  //   { duration: 300 },
  // );
}

cy.on("tap", "node", (evt) => {
  if (evt.target.data("isGroup")) {
    // cy.animate({ fit: { eles: evt.target, padding: 60 } }, { duration: 300 });
    return;
  }
  selectNode(evt.target.id());
});
cy.on("tap", (evt) => {
  if (evt.target === cy) {
    clearHighlight();
    cardEl.classList.remove("show");
    emptyEl.style.display = "flex";
  }
});

document.getElementById("re-layout").addEventListener("click", fcoseLayout);
document
  .getElementById("fit")
  .addEventListener("click", () => cy.fit(undefined, 40));

window.addEventListener("resize", () => cy.resize());
