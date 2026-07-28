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
      width: "mapData(weight, 1, 9, 34, 64)", // Slightly increased minimum size so text fits inside
      height: "mapData(weight, 1, 9, 34, 64)",
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

  /* ---- group containers: compound parent nodes ---- */
  {
    selector: "node:parent ",
    style: {
      shape: "round-rectangle ",
      "background-opacity ": 0.06,
      "border-width ": 0 /* Removed border completely */,
      "border-style ": "solid ",
      padding: 36,
      label: "data(label) ",
      "font-family ": "Space Grotesk, sans-serif ",
      "font-size ": 12.5,
      "font-weight ": 600,
      "text-valign ": "top ",
      "text-halign ": "left ",
      "text-margin-y ": -14,
      "text-margin-x ": 8,
      "text-transform ": "uppercase ",
      "compound-sizing-wrt-labels ": "include ",
      "z-index ": 1,
    },
  },
  {
    selector: 'node:parent[type= "source "]',
    style: {
      "background-color ": "#a86a28 ",
      color: "#a86a28 ",
    },
  },
  {
    selector: 'node:parent[type= "goods "]',
    style: {
      "background-color ": "#5a8455 ",
      color: "#5a8455 ",
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
      "line-color": "#a86a28db",
    },
  },
  /* Goods -> Goods highlighted color */
  {
    selector: "edge.edge-goods-goods.lit",
    style: {
      "line-color": "#5a8455e9",
    },
  },
  { selector: "node.leaf.selected", style: { "border-width": 1.5 } },
];
