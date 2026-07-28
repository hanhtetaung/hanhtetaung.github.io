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
  // Start them in a very tight grid (small 15px offsets)
  const offsetX = ((index % 5) - 2) * 15;
  const offsetY = (Math.floor(index / 5) - 4) * 15;

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
      quality: "proof", // "proof" provides the tightest packing for compound nodes
      animate: true,
      animationDuration: 700,
      randomize: false, // Keeps layout fixed on every refresh
      nodeDimensionsIncludeLabels: true,
      nodeSeparation: 10, // VERY small separation to pack source nodes tightly together
      piSepCompounds: true, // Strictly forbids the two main group boxes from overlapping
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
            if (allSources) return 80; // Pull simple goods close
          }
        }
        return 140; // Standard distance for complex goods
      },
      nodeRepulsion: 1500, // LOW repulsion so source nodes don't push each other away
      edgeElasticity: 0.1, // Low elasticity so edges don't drag the two main groups together
      gravity: 0.8, // HIGH gravity pulls source nodes tightly into the center of their group
      gravityRange: 1.5,
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

function rowItem(id, showIcon) {
  const e = byId[id];
  const div = document.createElement("div");
  div.className = "selected-item";

  if (showIcon) {
    const iconName = e.id.trim().replace(/_/g, "-");
    const iconSrc = `/sources-and-goods/assets/icons/${iconName}.svg`;
    div.innerHTML = `
      <img src="${iconSrc}" alt="${e.type}" class="icon" />
      <span class="small--emphasis">${e.name}</span>
    `;
  } else {
    div.className = "selected-item selected-item--" + e.type;
    div.innerHTML = `
      <i class="${e.type}-legend"></i>
      <span class="small--emphasis">${e.name}</span>
    `;
  }

  return div;
}

// Cache the card's header + section DOM nodes once, keyed by the
// data-section value in index.html, instead of re-querying by id
// on every renderCard() call.
const cardHeader = {
  kicker: document.getElementById("c-kicker"),
  name: document.getElementById("c-name"),
};

const cardSections = ["sources", "components", "used", "goods"].reduce(
  (acc, key) => {
    const section = cardEl.querySelector(`[data-section="${key}"]`);
    acc[key] = { section, list: section.querySelector('[data-role="list"]') };
    return acc;
  },
  {},
);

// Show/hide a section and, if visible, fill its row-list with `ids`
// (or an empty-state message when there are none).
function fillSection(key, ids, emptyMessage) {
  const { section, list } = cardSections[key];
  section.style.display = "";
  list.innerHTML = ids.length
    ? ""
    : `<span class="none">${emptyMessage}</span>`;
  const showIcon = key === "sources";
  ids.forEach((id) => list.appendChild(rowItem(id, showIcon)));
}

function hideSection(key) {
  cardSections[key].section.style.display = "none";
}

function renderCard(el) {
  const type = (el.type || "").trim();
  const isSource = type === "source";

  cardHeader.kicker.textContent = isSource ? "Source" : "Goods";
  cardHeader.name.textContent = el.name;

  if (isSource) {
    // SOURCE VIEW: Only show "Used in"
    hideSection("sources");
    hideSection("components");
    hideSection("used");
    fillSection("goods", downstreamIds(el), "Not used in anything yet.");
  } else {
    // GOODS VIEW
    hideSection("goods");

    // 1. Sources: root raw materials traced all the way down
    fillSection("sources", resolveRootSources(el), "No raw sources found.");

    // 2. Made up of: direct components/upstreams, hidden entirely when
    // every direct component is itself a raw source (nothing new to show)
    const ups = upstreamIds(el);
    const allComponentsAreSources =
      ups.length > 0 &&
      ups.every((id) => {
        const comp = byId[id];
        return comp && (comp.type || "").trim() === "source";
      });

    if (allComponentsAreSources) {
      hideSection("components");
    } else {
      fillSection("components", ups, "No direct components.");
    }

    // 3. Uses: other goods that include this one as a component
    fillSection("used", downstreamIds(el), "Not used in anything yet.");
  }

  // Trigger card animation; apply the node's type as a class
  // (e.g., "card show source" or "card show goods")
  emptyEl.style.display = "none";
  cardEl.className = "card show " + type;
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
