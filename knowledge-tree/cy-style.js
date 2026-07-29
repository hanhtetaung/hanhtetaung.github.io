// Reads an actual CSS custom property from :root (defined in _tokens.scss)
// so Cytoscape's JS-based styles stay in sync with the design tokens
// instead of duplicating hex values by hand. Falls back if the var isn't
// set yet (e.g. stylesheet not loaded) or document isn't available.
function cssVar(name, fallback) {
  if (typeof document === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

const SOURCE_BG = cssVar("--source-color-background", "#0f7399");
const SOURCE_TEXT = cssVar("--source-color-text", "#ffffff");
const GOOD_BG = cssVar("--good-color-background", "#1a7b5b");
const GOOD_TEXT = cssVar("--good-color-text", "#ffffff");
const COMPONENT_BG = cssVar("--component-color-background", "#876418");
const COMPONENT_TEXT = cssVar("--component-color-text", "#ffffff");
const USED_IN_BG = cssVar("--used-in-color-background", "#876418");
const USED_IN_TEXT = cssVar("--used-in-color-text", "#ffffff");
const TEXT_PRIMARY = cssVar("--color-text", "#0e172a");

// Mirrors mapData(weight, 1, 9, 34, 64) so other states can size themselves
// *relative* to the base node size (e.g. 1.2x) instead of hardcoding a
// second absolute pixel range that has to be kept in sync by hand.
const BASE_SIZE_MIN = 34;
const BASE_SIZE_MAX = 64;
function baseNodeSize(weight) {
  const w = Math.max(1, Math.min(9, weight ?? 1)); // clamp like mapData does
  const t = (w - 1) / (9 - 1);
  return BASE_SIZE_MIN + t * (BASE_SIZE_MAX - BASE_SIZE_MIN);
}
function scaledNodeSize(scale) {
  return (ele) => baseNodeSize(ele.data("weight")) * scale;
}

const CY_STYLE = [
  {
    selector: "node",
    style: {
      "font-family": "JetBrains Mono, monospace",
      color: "#1f2328",
      "transition-property":
        "background-color, border-color, background-opacity, opacity",
      "transition-duration": "120ms",
    },
  },

  {
    selector: "node.leaf",
    style: {
      shape: "ellipse",
      width: scaledNodeSize(1), // Slightly increased minimum size so text fits inside
      height: scaledNodeSize(1),
      "background-color": "#fbfaf6",
      "background-opacity": 0.95, // Solid background so text is readable over crossing edges
      "border-width": 2,
      label: "data(label)",
      "font-size": 10,
      "font-weight": 600,
      "text-valign": "center", // Centers text vertically inside the node
      "text-halign": "center", // Centers text horizontally inside the node
      "text-margin-y": 0, // Removes the bottom offset
      "text-wrap": "wrap",
      "text-max-width": 80,
      "min-zoomed-font-size": 6,
      "z-index": 10,
    },
  },
  {
    selector: 'node.leaf[type="source"]',
    style: {
      "background-color": SOURCE_BG, // --source-color-background
      "border-color": SOURCE_BG,
      color: SOURCE_TEXT, // --source-color-text
    },
  },
  {
    selector: 'node.leaf[type="goods"]',
    style: {
      "background-color": GOOD_BG, // --good-color-background
      "border-color": GOOD_BG,
      color: GOOD_TEXT, // --good-color-text
    },
  },

  /* Group containers (compound parents): purely structural for the fCoSE
     layout, not interactive — no color, no click, no selection highlight. */
  {
    selector: "node:parent",
    style: {
      events: "no",
      "background-color": cssVar("--color-bg-primary", "#fcf5e8"),
      "background-opacity": 0,
      "border-width": 0,
    },
  },

  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      width: 1.2,
      "line-color": "#b6b0a0",
      opacity: 0.65,
      "z-index": 5,
      "transition-property": "line-color, opacity, width",
      "transition-duration": "120ms",
    },
  },

  // dim / highlight states, toggled on tap
  // .dim = fully unrelated to the selection (outside the chain entirely)
  { selector: ".dim", style: { opacity: 0.08 } },
  {
    selector: ".lit",
    style: { opacity: 1 },
  },
  /* Base lit state (handles width and opacity for all highlighted edges) */
  {
    selector: "edge.lit",
    style: {
      width: 1.8,
      opacity: 1,
    },
  },
  /* Nodes that are part of the highlighted chain but not directly
     connected to the selected node (e.g. selecting Pho lights up
     Chicken -> Egg, but Egg is two hops away) get a lighter,
     in-between opacity — distinct from the ".dim" (unrelated) state. */
  {
    selector: "node.leaf.lit",
    style: { opacity: 0.7 },
  },
  /* Sources stay fully visible in the chain regardless of hop distance. */
  {
    selector: 'node.leaf[type="source"].lit',
    style: { opacity: 1 },
  },
  /* Direct one-hop uses (e.g. selecting CPU when Computer uses it directly)
     stay at their normal, full-opacity goods/source color — plain, no
     border — unlike deeper multi-hop chain members which stay dimmed. */
  {
    selector: "node.leaf.used-directly",
    style: {
      opacity: 1,
      "background-color": USED_IN_BG,
      "border-width": 0,
    },
  },
  /* Same one-hop-use case, but for clicking a SOURCE node: its directly
     made goods stay plain/normal goods color, no orange accent. */
  {
    selector: "node.leaf.used-directly-source",
    style: { opacity: 1 },
  },
  {
    selector: "node.leaf.selected",
    style: {
      "border-width": 4,
      "border-color": TEXT_PRIMARY, // --color-text
      opacity: 1,
      width: scaledNodeSize(1.5), // 20% bigger than the node's own base size
      height: scaledNodeSize(1.5),
    },
  },

  /* First-connected: the direct components of the selected node keep their
     own type color (source or goods) — no fill override — and get a
     component-color border as the "directly connected" accent instead.
     e.g. selecting Banh Mi: Bread stays goods-green with a brown border,
     not repainted brown. */
  {
    selector: "node.leaf.first-connected",
    style: {
      "background-color": COMPONENT_BG, // --component-color-background
      color: COMPONENT_TEXT, // --component-color-text
      "z-index": 999,
      "border-width": 0,
      opacity: 1,
    },
  },
  {
    selector: 'node.leaf[type="source"].first-connected',
    style: {
      "background-color": SOURCE_BG, // --source-color-background (keep the source's own fill)
      color: SOURCE_TEXT, // --source-color-text
      "border-width": 6,
      "border-color": COMPONENT_BG, // --component-color-background
      "z-index": 999,
      opacity: 1,
    },
  },
];
