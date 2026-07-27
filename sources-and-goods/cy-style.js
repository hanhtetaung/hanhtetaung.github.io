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

  /* ---- leaf elements: sources / goods ---- */
  /* ---- leaf elements: sources / goods ---- */
  {
    selector: "node.leaf",
    style: {
      shape: "ellipse",
      width: "mapData(weight, 1, 9, 34, 64)", // Slightly increased minimum size so text fits inside
      height: "mapData(weight, 1, 9, 34, 64)",
      "background-color": "#fbfaf6",
      "background-opacity": 0.95, // Solid background so text is readable over crossing edges
      "border-width": 2,
      "border-color": "#cdc6b4",
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
  /* Base lit state (handles width and opacity for all highlighted edges) */
  {
    selector: "edge.lit",
    style: {
      width: 1.8,
      opacity: 1,
    },
  },
  /* Source -> Goods highlighted color */
  {
    selector: "edge.edge-source-goods.lit",
    style: {
      "line-color": "#a86a28",
    },
  },
  /* Goods -> Goods highlighted color */
  {
    selector: "edge.edge-goods-goods.lit",
    style: {
      "line-color": "#5a8455",
    },
  },
  { selector: "node.leaf.selected", style: { "border-width": 3.4 } },
];
