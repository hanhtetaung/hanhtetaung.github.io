import { CY_STYLE } from "./cy-style.js";
import { ELEMENTS } from "./data.js";
import { asset } from "./web-components/define.js";

// ==========================================
// 1. SHADOW DOM REFERENCES
// ==========================================
// Query the custom elements, then access their shadowRoots
const mainPanel = document.querySelector("terra-main-panel");
const rightPanel = document.querySelector("terra-right-panel");

if (!mainPanel || !rightPanel) {
  console.error(
    "Terra panels not found. Ensure custom elements are defined before this script runs.",
  );
}

const cyContainer = mainPanel.shadowRoot.getElementById("cy");
const headerEl = mainPanel.shadowRoot.querySelector("terra-header");
const searchInput = headerEl.shadowRoot.getElementById("search-input");
const searchResultsEl = headerEl.shadowRoot.getElementById("search-results");

const emptyEl = rightPanel.shadowRoot.getElementById("empty");
const cardEl = rightPanel.shadowRoot.getElementById("card");

// ==========================================
// 2. DATA PREPARATION
// ==========================================
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

// ==========================================
// 3. CYTOSCAPE INITIALIZATION
// ==========================================
const GROUPS = [
  { id: "group-source", label: "Sources", type: "source" },
  { id: "group-goods", label: "Goods", type: "goods" },
];

const groupNodes = GROUPS.map((g, index) => ({
  data: { id: g.id, label: g.label, type: g.type },
  position: { x: index === 0 ? 0 : 1200, y: 0 },
  selectable: false,
  grabbable: false,
}));

const nodes = ELEMENTS.map((e, index) => {
  const weight = upstreamIds(e).length + downstreamIds(e).length;
  const typeTrimmed = (e.type || "").trim();
  const baseX = typeTrimmed === "source" ? 0 : 1200;
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

const cy = cytoscape({
  container: cyContainer, // <-- Now correctly points to shadow DOM
  elements: [...groupNodes, ...nodes, ...edges],
  style: CY_STYLE,
  wheelSensitivity: 0.25,
  layout: { name: "preset" },
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
      nodeSeparation: 10,
      piSepCompounds: true,
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
            if (allSources) return 80;
          }
        }
        return 140;
      },
      nodeRepulsion: 1500,
      edgeElasticity: 0.1,
      gravity: 0.8,
      gravityRange: 1.5,
      numIter: 2500,
      tile: true,
      fit: true,
      padding: 50,
    })
    .run();

fcoseLayout();

// ==========================================
// 4. INTERACTION & UI LOGIC
// ==========================================
let arrangedNeighbors = null;
const preArrangePositions = new Map();

function restoreArrangedPositions() {
  if (!arrangedNeighbors) return;
  arrangedNeighbors.forEach((n) => {
    const pos = preArrangePositions.get(n.id());
    if (pos)
      n.animate({ position: pos }, { duration: 300, easing: "ease-out" });
  });
  arrangedNeighbors = null;
  preArrangePositions.clear();
}

function arrangeSide(center, nodeRadius, sideNodes, direction) {
  if (!sideNodes || sideNodes.length === 0) return;

  const maxNeighborRadius = Math.max(
    ...sideNodes.map((n) => n.outerWidth() / 2),
  );
  const gap = 24;
  const spacing = 2 * maxNeighborRadius + gap;
  const count = sideNodes.length;
  const totalHeight = (count - 1) * spacing;
  const startY = center.y - totalHeight / 2;
  const xOffset = nodeRadius + maxNeighborRadius + 90;

  sideNodes.forEach((neighborNode, i) => {
    const x = center.x + direction * xOffset;
    const y = startY + i * spacing;
    neighborNode.animate(
      { position: { x, y } },
      { duration: 400, easing: "ease-out" },
    );
  });
}

function arrangeRing(center, nodeRadius, ringNodes) {
  if (!ringNodes || ringNodes.length === 0) return;

  const maxNeighborRadius = Math.max(
    ...ringNodes.map((n) => n.outerWidth() / 2),
  );
  const gap = 20;
  const count = ringNodes.length;
  const circumferenceNeeded = count * (2 * maxNeighborRadius + gap);
  const minRadius = nodeRadius + maxNeighborRadius + 40;
  const radius = Math.max(minRadius, circumferenceNeeded / (2 * Math.PI));

  ringNodes.forEach((neighborNode, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    neighborNode.animate(
      { position: { x, y } },
      { duration: 400, easing: "ease-out" },
    );
  });
}

function arrangeAroundNode(node, ingredientNodes, useNodes) {
  const combined = ingredientNodes.union(useNodes);
  if (combined.length === 0) return;

  combined.forEach((n) => preArrangePositions.set(n.id(), { ...n.position() }));
  arrangedNeighbors = combined;

  const center = node.position();
  const nodeRadius = node.outerWidth() / 2;
  const isSource = node.data("type") === "source";

  if (isSource) {
    arrangeRing(center, nodeRadius, combined);
  } else {
    arrangeSide(center, nodeRadius, ingredientNodes, -1);
    arrangeSide(center, nodeRadius, useNodes, 1);
  }
}

function clearHighlight() {
  cy.elements().removeClass(
    "dim lit selected first-connected used-directly used-directly-source edge-direct edge-indirect",
  );
  restoreArrangedPositions();
}

function highlight(node) {
  const chain = node.predecessors().union(node.successors()).union(node);
  const withGroups = chain.union(chain.ancestors());
  cy.elements().addClass("dim");
  withGroups.removeClass("dim").addClass("lit");
  node.removeClass("dim").addClass("lit selected");

  const firstConnected = node.incomers("node");
  firstConnected.addClass("first-connected");

  const outgoers = node.outgoers("node");
  if (node.data("type") === "source") {
    outgoers.addClass("used-directly-source");
  } else {
    outgoers.addClass("used-directly");
  }

  const directEdges = node.connectedEdges();
  directEdges.addClass("edge-direct");

  const indirectEdges = chain.filter("edge").difference(directEdges);
  indirectEdges.addClass("edge-indirect");

  arrangeAroundNode(node, firstConnected, outgoers);
}

function rowItem(id, showIcon) {
  const e = byId[id];
  const div = document.createElement("div");
  div.className = "selected-item";

  if (showIcon) {
    const iconName = e.id.trim().replace(/_/g, "-");
    const iconSrc = asset(`./assets/icons/${iconName}.svg`);
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

const cardShadow = cardEl.shadowRoot; // Pierce the card's shadow root

const cardHeader = {
  icon: cardShadow.getElementById("c-icon"),
  kicker: cardShadow.getElementById("c-kicker"),
  name: cardShadow.getElementById("c-name"),
};

const cardSections = ["sources", "components", "used", "goods"].reduce(
  (acc, key) => {
    const section = cardShadow.querySelector(`[data-section="${key}"]`);
    acc[key] = { section, list: section.querySelector('[data-role="list"]') };
    return acc;
  },
  {},
);

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
  cardHeader.kicker.className = isSource ? "small--source" : "small--goods";
  cardHeader.name.textContent = el.name;

  if (isSource) {
    const iconName = el.id.trim().replace(/_/g, "-");
    cardHeader.icon.src = `/terra/assets/icons/${iconName}.svg`;
    cardHeader.icon.alt = el.type;
    cardHeader.icon.style.display = "";
  } else {
    cardHeader.icon.style.display = "none";
  }

  if (isSource) {
    hideSection("sources");
    hideSection("components");
    hideSection("used");
    fillSection("goods", downstreamIds(el), "No downstream uses yet");
  } else {
    hideSection("goods");
    fillSection("sources", resolveRootSources(el), "No raw sources found.");

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
      fillSection("components", ups, "No downstream uses yet");
    }

    const used = downstreamIds(el);
    if (used.length === 0) {
      hideSection("used");
    } else {
      fillSection("used", used, "No downstream uses yet");
    }
  }

  emptyEl.style.display = "none";
  cardEl.className = "card show " + type;
}

function selectNode(id) {
  const node = cy.getElementById(id);
  if (node.empty()) return;
  clearHighlight();
  highlight(node);
  renderCard(byId[id]);
}

cy.on("tap", "node", (evt) => {
  if (!byId[evt.target.id()]) return;
  selectNode(evt.target.id());
});

cy.on("tap", (evt) => {
  if (evt.target === cy) {
    clearHighlight();
    cardEl.classList.remove("show");
    emptyEl.style.display = "flex";
  }
});

// These are assumed to be in the global light DOM (e.g., a toolbar)
const relayoutBtn = document.getElementById("re-layout");
if (relayoutBtn) relayoutBtn.addEventListener("click", fcoseLayout);

const fitBtn = document.getElementById("fit");
if (fitBtn) fitBtn.addEventListener("click", () => cy.fit(undefined, 40));

// ==========================================
// 5. SEARCH LOGIC
// ==========================================
const MAX_SEARCH_RESULTS = 8;

searchResultsEl.style.listStyle = "none";
searchResultsEl.style.margin = "0";
searchResultsEl.style.padding = "0";
searchResultsEl.style.position = "absolute";
searchResultsEl.style.top = "100%";
searchResultsEl.style.left = "0";
searchResultsEl.style.right = "0";
searchResultsEl.style.zIndex = "1000";
searchResultsEl.style.background = "#fff";
searchResultsEl.style.border = "1px solid #ccc";
searchResultsEl.style.borderRadius = "6px";
searchResultsEl.style.maxHeight = "320px";
searchResultsEl.style.overflowY = "auto";
searchResultsEl.style.display = "none";

// .closest() correctly searches within the shadow DOM tree
const searchContainerEl = searchInput.closest(".search-container");
if (searchContainerEl) {
  searchContainerEl.style.position = "relative";
}

function searchMatches(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = [];
  ELEMENTS.forEach((el) => {
    const name = el.name.toLowerCase();
    const idx = name.indexOf(q);
    if (idx === -1) return;
    let score = 2;
    if (idx === 0) score = 0;
    else if (name[idx - 1] === " ") score = 1;
    scored.push({ el, score });
  });

  scored.sort(
    (a, b) => a.score - b.score || a.el.name.localeCompare(b.el.name),
  );
  return scored.slice(0, MAX_SEARCH_RESULTS).map((s) => s.el);
}

function closeSearchResults() {
  searchResultsEl.innerHTML = "";
  searchResultsEl.classList.remove("show");
  searchResultsEl.style.display = "none";
  activeSearchIndex = -1;
}

function highlightActiveResult() {
  [...searchResultsEl.children].forEach((li, i) => {
    const isActive = i === activeSearchIndex;
    li.classList.toggle("active", isActive);
    li.style.background = isActive ? "#e0e0e0" : "";
  });
}

function chooseSearchResult(el) {
  selectNode(el.id);
  searchInput.value = "";
  closeSearchResults();
  searchInput.blur();
}

function renderSearchResults(query) {
  const matches = searchMatches(query);
  activeSearchIndex = -1;

  if (matches.length === 0) {
    closeSearchResults();
    return;
  }

  searchResultsEl.innerHTML = "";
  matches.forEach((el) => {
    const li = document.createElement("li");
    li.className = "search-results__item";
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.gap = "8px";
    li.style.padding = "8px 12px";
    li.style.cursor = "pointer";
    li.innerHTML = `
      <i class="${el.type}-legend"></i>
      <span class="small--emphasis">${el.name}</span>
    `;
    li.addEventListener("mouseenter", () => {
      li.style.background = "#f0f0f0";
    });
    li.addEventListener("mouseleave", () => {
      if (!li.classList.contains("active")) li.style.background = "";
    });
    li.addEventListener("mousedown", (evt) => {
      evt.preventDefault();
      chooseSearchResult(el);
    });
    searchResultsEl.appendChild(li);
  });

  searchResultsEl.classList.add("show");
  searchResultsEl.style.display = "block";
}

let activeSearchIndex = -1;

searchInput.addEventListener("input", (evt) => {
  renderSearchResults(evt.target.value);
});

searchInput.addEventListener("keydown", (evt) => {
  const items = searchResultsEl.children;
  if (!items.length) return;

  if (evt.key === "ArrowDown") {
    evt.preventDefault();
    activeSearchIndex = (activeSearchIndex + 1) % items.length;
    highlightActiveResult();
  } else if (evt.key === "ArrowUp") {
    evt.preventDefault();
    activeSearchIndex = (activeSearchIndex - 1 + items.length) % items.length;
    highlightActiveResult();
  } else if (evt.key === "Enter") {
    evt.preventDefault();
    const query = searchInput.value;
    const matches = searchMatches(query);
    const chosen =
      activeSearchIndex >= 0 ? matches[activeSearchIndex] : matches[0];
    if (chosen) chooseSearchResult(chosen);
  } else if (evt.key === "Escape") {
    searchInput.value = "";
    closeSearchResults();
    searchInput.blur();
  }
});

searchInput.addEventListener("blur", () => {
  setTimeout(closeSearchResults, 100);
});
