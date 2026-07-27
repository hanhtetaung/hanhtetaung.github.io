/* ==========================================================================
   cy-style.js — the Cytoscape.js stylesheet.

   Elements are grouped into compound containers by type (Source / Goods)
   — fCoSE lays these out as visual clusters, like the compound fCoSE
   demo. Leaf nodes (the actual elements) are circles sized by how many
   connections they have; group nodes are their dashed, labeled containers.

   Light theme: cream/white surfaces, dark ink text, deepened accent colors
   for contrast against a light background.
   ========================================================================== */

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

  /* ---- leaf elements: sources / materials / goods ---- */
  {
    selector: "node.leaf",
    style: {
      shape: "ellipse",
      width: "mapData(weight, 1, 9, 22, 56)",
      height: "mapData(weight, 1, 9, 22, 56)",
      "background-color": "#fbfaf6",
      "border-width": 2,
      "border-color": "#cdc6b4",
      label: "data(label)",
      "font-size": 10,
      "font-weight": 500,
      "text-valign": "bottom",
      "text-halign": "center",
      "text-margin-y": 6,
      "text-wrap": "wrap",
      "text-max-width": 90,
      "min-zoomed-font-size": 6,
      "z-index": 10,
    },
  },
  {
    selector: 'node.leaf[type="source"]',
    style: { "background-color": "#a86a2822", "border-color": "#a86a28" },
  },
  {
    selector: 'node.leaf[type="goods"]',
    style: { "background-color": "#5a845522", "border-color": "#5a8455" },
  },

  /* ---- group containers: compound parent nodes ---- */
  {
    selector: "node:parent",
    style: {
      shape: "round-rectangle",
      "background-opacity": 0.06,
      "border-width": 1.4,
      "border-style": "dashed",
      padding: 36,
      label: "data(label)",
      "font-family": "Space Grotesk, sans-serif",
      "font-size": 12.5,
      "font-weight": 600,
      "text-valign": "top",
      "text-halign": "left",
      "text-margin-y": -14,
      "text-margin-x": 8,
      "text-transform": "uppercase",
      "compound-sizing-wrt-labels": "include",
      "z-index": 1,
    },
  },
  {
    selector: 'node:parent[type="source"]',
    style: {
      "background-color": "#a86a28",
      "border-color": "#a86a2870",
      color: "#a86a28",
    },
  },
  {
    selector: 'node:parent[type="goods"]',
    style: {
      "background-color": "#5a8455",
      "border-color": "#5a845570",
      color: "#5a8455",
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
  { selector: ".dim", style: { opacity: 0.08 } },
  { selector: ".lit", style: { opacity: 1 } },
  { selector: "node.leaf.lit", style: { "background-color": "#eae6d9" } },
  {
    selector: "edge.lit",
    style: {
      "line-color": "#1f2328",
      width: 1.8,
      opacity: 1,
    },
  },
  { selector: "node.leaf.selected", style: { "border-width": 3.4 } },
];
