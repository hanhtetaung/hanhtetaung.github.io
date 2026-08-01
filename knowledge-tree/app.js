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
        children together, the way the fcose compound demo does.
        No styling is applied to these — see cy-style.js. */
const GROUPS = [
  { id: "group-source", label: "Sources", type: "source" },
  { id: "group-goods", label: "Goods", type: "goods" },
];

const groupNodes = GROUPS.map((g, index) => ({
  data: { id: g.id, label: g.label, type: g.type },
  // Force the two main groups to start on completely opposite sides
  position: { x: index === 0 ? 0 : 1200, y: 0 },
  selectable: false,
  grabbable: false,
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

/* ---- side / ring arrangement of a selected node's ingredients & uses ----
   When a node is selected, its direct components ("first-connected" /
   ingredients) are pulled out to a vertical stack on the LEFT, and its
   direct uses (outgoers) to a vertical stack on the RIGHT — both centered
   on the selected node's own height.

   Two cases fall back to a full ring around the selected node instead:
     - the node has no uses (nothing downstream) — a right-only stack
       would leave the ingredients lopsided on one side
     - the node is a SOURCE — sources have no ingredients (nothing
       upstream of them) to begin with, so a right-only stack of uses is
       just as lopsided; ring them instead

   Original positions are remembered and restored on deselect, so this
   never permanently disturbs the base fCoSE layout — it's a temporary
   focus view. */
let arrangedNeighbors = null; // cytoscape collection currently pulled aside
const preArrangePositions = new Map(); // id -> {x, y} to restore back to

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

// Stacks `sideNodes` vertically, centered on `center.y`, offset horizontally
// from `center.x` by `direction` (-1 = left, +1 = right).
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

// Places `ringNodes` evenly around `center` in a full circle, radius sized
// so they don't overlap each other or the selected node.
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
    const angle = (2 * Math.PI * i) / count - Math.PI / 2; // first node at top
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
    // Source nodes have no ingredients to begin with (combined === uses);
    // a goods node with no uses has combined === ingredients. Either way,
    // ring the one side that exists instead of a lopsided single-side stack.
    arrangeRing(center, nodeRadius, combined);
  } else {
    arrangeSide(center, nodeRadius, ingredientNodes, -1); // left = ingredients
    arrangeSide(center, nodeRadius, useNodes, 1); // right = uses
  }
}

function clearHighlight() {
  cy.elements().removeClass(
    "dim lit selected first-connected used-directly used-directly-source",
  );
  restoreArrangedPositions();
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

  // First-connected: only the direct (one-hop) components that make up
  // this node, not the whole ancestor chain. Styling for these — including
  // the source-vs-goods distinction — lives in cy-style.js.
  const firstConnected = node.incomers("node");
  firstConnected.addClass("first-connected");

  // Direct one-hop uses (e.g. clicking CPU when Computer uses it directly)
  // stay at full opacity instead of the dimmer multi-hop opacity. The
  // orange "used" accent only applies when a GOODS node is clicked;
  // clicking a SOURCE leaves its directly-used goods at their normal
  // plain goods color — see cy-style.js for both classes.
  const outgoers = node.outgoers("node");
  if (node.data("type") === "source") {
    outgoers.addClass("used-directly-source");
  } else {
    outgoers.addClass("used-directly");
  }

  arrangeAroundNode(node, firstConnected, outgoers);
}

function rowItem(id, showIcon) {
  const e = byId[id];
  const div = document.createElement("div");
  div.className = "selected-item";

  if (showIcon) {
    const iconName = e.id.trim().replace(/_/g, "-");
    const iconSrc = `/knowledge-tree/assets/icons/${iconName}.svg`;
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
  icon: document.getElementById("c-icon"),
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
  cardHeader.kicker.className = isSource ? "small--source" : "small--goods";
  cardHeader.name.textContent = el.name;

  if (isSource) {
    const iconName = el.id.trim().replace(/_/g, "-");
    cardHeader.icon.src = `/knowledge-tree/assets/icons/${iconName}.svg`;
    cardHeader.icon.alt = el.type;
    cardHeader.icon.style.display = "";
  } else {
    cardHeader.icon.style.display = "none";
  }

  if (isSource) {
    // SOURCE VIEW: Only show "Used in"
    hideSection("sources");
    hideSection("components");
    hideSection("used");
    fillSection("goods", downstreamIds(el), "No downstream uses yet");
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
      fillSection("components", ups, "No downstream uses yet");
    }

    // 3. Uses: other goods that include this one as a component
    const used = downstreamIds(el);
    if (used.length === 0) {
      hideSection("used");
    } else {
      fillSection("used", used, "No downstream uses yet");
    }
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
}

cy.on("tap", "node", (evt) => {
  if (!byId[evt.target.id()]) return; // group container, not a real element
  selectNode(evt.target.id());
});
cy.on("tap", (evt) => {
  if (evt.target === cy) {
    clearHighlight();
    cardEl.classList.remove("show");
    emptyEl.style.display = "flex";
  }
});

const relayoutBtn = document.getElementById("re-layout");
if (relayoutBtn) relayoutBtn.addEventListener("click", fcoseLayout);

const fitBtn = document.getElementById("fit");
if (fitBtn) fitBtn.addEventListener("click", () => cy.fit(undefined, 40));

/* ---- search ---- */
const searchInput = document.getElementById("search-input");
const searchResultsEl = document.getElementById("search-results");

const MAX_SEARCH_RESULTS = 8;

// Baseline styles applied via JS so the dropdown is visible and positioned
// correctly even if main.css doesn't define .search-results / .show rules
// (or defines them differently than expected). main.css can still override
// any of these since inline styles here only set what's needed to function.
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

// The dropdown is positioned absolute relative to its container, so the
// container needs position:relative or it'll anchor to the page instead.
const searchContainerEl = searchInput.closest(".search-container");
if (searchContainerEl) {
  searchContainerEl.style.position = "relative";
}

// Rank by where the match occurs (name starts with query > word starts
// with query > substring anywhere), then alphabetically, so typing "co"
// surfaces "Copper"/"Cotton" above e.g. "Silicon".
function searchMatches(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = [];
  ELEMENTS.forEach((el) => {
    const name = el.name.toLowerCase();
    const idx = name.indexOf(q);
    if (idx === -1) return;
    let score = 2; // substring match anywhere
    if (idx === 0)
      score = 0; // starts with query
    else if (name[idx - 1] === " ") score = 1; // word boundary match
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
  cy.animate(
    { center: { eles: cy.getElementById(el.id) }, zoom: 1.5 },
    { duration: 400 },
  );
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
      // mousedown (not click) fires before the input's blur handler,
      // so the result is still in the DOM when the user picks it.
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

// Keyboard navigation: arrow keys move the highlighted result, Enter
// selects it, Escape clears the dropdown.
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
  // Delay so a mousedown-triggered selection above still fires first.
  setTimeout(closeSearchResults, 100);
});
