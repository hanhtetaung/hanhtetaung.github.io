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
  { id: "group-goods", label: "Goods", type: "goods" },
];

const groupNodes = GROUPS.map((g, index) => ({
  data: { id: g.id, label: g.label, type: g.type, isGroup: true },
  // Force the two main groups to start on completely opposite sides
  position: { x: index === 0 ? 0 : 1200, y: 0 },
}));

const nodes = ELEMENTS.map((e, index) => {
  const weight = upstreamIds(e).length + downstreamIds(e).length;
  const typeTrimmed = (e.type || "").trim();

  // Base X position depends on the group
  const baseX = typeTrimmed === "source" ? 0 : 1200;
  // Scatter them slightly around the base so fcose has a starting shape
  const offsetX = ((index % 6) - 2.5) * 40;
  const offsetY = (Math.floor(index / 6) - 5) * 40;

  return {
    data: {
      id: e.id,
      label: e.name,
      type: e.type,
      weight: Math.max(1, weight),
      parent: "group-" + typeTrimmed,
    },
    position: { x: baseX + offsetX, y: offsetY },
    classes: "leaf",
  };
});

const edges = [];
ELEMENTS.forEach((e) => {
  upstreamIds(e).forEach((src) => {
    const srcEl = byId[src];
    let edgeClass = "";

    if (srcEl) {
      const srcType = (srcEl.type || "").trim();
      const tgtType = (e.type || "").trim();
      if (srcType === "source" && tgtType === "goods")
        edgeClass = "edge-source-goods";
      else if (srcType === "goods" && tgtType === "goods")
        edgeClass = "edge-goods-goods";
    }

    edges.push({
      data: { id: src + "__" + e.id, source: src, target: e.id },
      classes: edgeClass,
    });
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
      quality: "proof",
      animate: true,
      animationDuration: 700,
      randomize: false,
      nodeDimensionsIncludeLabels: true,
      nodeSeparation: 75,
      piSepCompounds: true, // CRITICAL: Strictly forbids compound containers from overlapping
      idealEdgeLength: function (edge) {
        const targetId = edge.target().id();
        const targetEl = byId[targetId];
        if (targetEl) {
          const tType = (targetEl.type || "").trim();
          if (tType === "goods") {
            const ups = upstreamIds(targetEl);
            const allSources =
              ups.length > 0 &&
              ups.every((id) => {
                const comp = byId[id];
                return comp && (comp.type || "").trim() === "source";
              });
            if (allSources) return 80; // Close, but leaves room for the compound borders
          }
        }
        return 120;
      },
      nodeRepulsion: 9000, // Normal repulsion so source nodes stay nicely clustered together
      edgeElasticity: 0.45, // Normal elasticity
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
const typeLabel = { source: "Source", goods: "Goods" };

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
  const type = (el.type || "").trim();
  const isSource = type === "source";

  // Header info
  document.getElementById("c-kicker").textContent = isSource
    ? "Raw source"
    : "Goods";
  document.getElementById("c-name").textContent = el.name;

  const tag = document.getElementById("c-type");
  tag.className = "type-tag " + type;
  document.getElementById("c-type-label").textContent = typeLabel[type];

  // Grab DOM elements
  const sourcesSection = document.getElementById("c-sources-section");
  const sourcesWrap = document.getElementById("c-sources");
  sourcesWrap.innerHTML = "";

  const componentsSection = document.getElementById("c-components-section");
  const componentsWrap = document.getElementById("c-components");
  componentsWrap.innerHTML = "";

  const usedSection = document.getElementById("c-used-section");
  const usedWrap = document.getElementById("c-used");
  usedWrap.innerHTML = "";

  if (isSource) {
    // SOURCE VIEW: Only show "Used in"
    sourcesSection.style.display = "none";
    componentsSection.style.display = "none";
    usedSection.style.display = "";

    const downs = downstreamIds(el);
    if (downs.length === 0) {
      usedWrap.innerHTML =
        '<span class="none">Not used in anything yet.</span>';
    } else {
      downs.forEach((id) => usedWrap.appendChild(rowItem(id)));
    }
  } else {
    // GOODS VIEW
    sourcesSection.style.display = "";
    usedSection.style.display = "none";

    // 1. Sources (Root raw materials traced all the way down)
    const roots = resolveRootSources(el);
    if (roots.length === 0) {
      sourcesWrap.innerHTML = '<span class="none">No raw sources found.</span>';
    } else {
      roots.forEach((id) => sourcesWrap.appendChild(rowItem(id)));
    }

    // 2. Made up of (Direct components/upstreams)
    const ups = upstreamIds(el);

    // Check if ALL direct components are raw sources
    const allComponentsAreSources =
      ups.length > 0 &&
      ups.every((id) => {
        const comp = byId[id];
        return comp && (comp.type || "").trim() === "source";
      });

    if (allComponentsAreSources) {
      // Hide "Made up of" section if it's exclusively made of raw sources
      componentsSection.style.display = "none";
    } else {
      // Show "Made up of" if it contains other goods or has no components
      componentsSection.style.display = "";
      if (ups.length === 0) {
        componentsWrap.innerHTML =
          '<span class="none">No direct components.</span>';
      } else {
        ups.forEach((id) => componentsWrap.appendChild(rowItem(id)));
      }
    }
  }

  // Trigger card animation
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
