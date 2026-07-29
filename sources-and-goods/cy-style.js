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

  /* Group containers (compound parents): purely structural for the fCoSE
     layout, not interactive — no color, no click, no selection highlight. */
  {
    selector: "node:parent",
    style: {
      events: "no",
      "background-color": "#fcf5e8",
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
    style: { opacity: 0.5 },
  },
  /* Sources stay fully visible in the chain regardless of hop distance. */
  {
    selector: 'node.leaf[type="source"].lit',
    style: { opacity: 1 },
  },
  {
    selector: "node.leaf.selected",
    style: { "border-width": 4, "border-color": "#0e172a", opacity: 1 },
  },

  /* First-connected: the direct components of the selected goods node get
     filled with the component color. If a direct component is itself a
     raw source, its own source color stays as the fill and the component
     color is only applied as a border, so both identities read clearly. */
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
      "border-width": 3,
      "border-color": "#876418", // --component-color-background
      "z-index": 999,
      opacity: 1,
    },
  },
];
