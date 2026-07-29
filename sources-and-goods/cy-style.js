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
      "background-color": "#0f7399", // --source-color-background
      "border-color": "#0f7399",
      color: "#ffffff", // --source-color-text
    },
  },
  {
    selector: 'node.leaf[type="goods"]',
    style: {
      "background-color": "#1a7b5b", // --good-color-background
      "border-color": "#1a7b5b",
      color: "#ffffff", // --good-color-text
    },
  },

  /* Group containers (compound parents): purely structural for the fCoSE
     layout, not interactive — no color, no click, no selection highlight. */
  {
    selector: "node:parent",
    style: {
      events: "no",
      "background-color": "#fcf5e8",
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
    style: { opacity: 0.8 },
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
    style: { opacity: 1 },
  },
  {
    selector: "node.leaf.selected",
    style: {
      "border-width": 4,
      "border-color": "#0e172a",
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
      "background-color": "#876418", // --component-color-background
      color: "#ffffff", // --component-color-text
      "z-index": 999,
      "border-width": 0,
      opacity: 1,
    },
  },
  {
    selector: 'node.leaf[type="source"].first-connected',
    style: {
      "background-color": "#0f7399", // --source-color-background (keep the source's own fill)
      color: "#ffffff", // --source-color-text
      "border-width": 4,
      "border-color": "#876418", // --component-color-background
      "z-index": 999,
      opacity: 1,
    },
  },
];
