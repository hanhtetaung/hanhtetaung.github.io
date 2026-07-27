/* ==========================================================================
   data.js — the element catalog.
   Each element is either a source (no inputs), a material (made from one
   or more sources), or a good (made from sources, materials, and/or goods).

   Just give each element an id (word_word format) and a type — the display
   name is derived from the id automatically (see toLabel() in app.js), so
   there's no separate "name" field to keep in sync.
   ========================================================================== */

const ELEMENTS = [
  // ---- sources (7) ----
  { id: "plant", type: "source" },
  { id: "crude_oil", type: "source" },
  { id: "animal", type: "source" },
  { id: "sand", type: "source" },
  { id: "clay", type: "source" },
  { id: "stone", type: "source" },
  { id: "water", type: "source" },

  // ---- materials ----
  { id: "beef", type: "material", sources: ["animal"] },
  { id: "pork", type: "material", sources: ["animal"] },
  { id: "silkworm", type: "material", sources: ["animal"] },
  { id: "chicken", type: "material", sources: ["animal"] },
  { id: "leather", type: "material", sources: ["animal"] },

  { id: "rice", type: "material", sources: ["plant"] },
  { id: "wheat", type: "material", sources: ["plant"] },
  { id: "sugar", type: "material", sources: ["plant"] },
  { id: "papaya", type: "material", sources: ["plant"] },
  { id: "lime", type: "material", sources: ["plant"] },

  { id: "glass", type: "material", sources: ["sand"] },
  { id: "silicon", type: "material", sources: ["sand"] },

  { id: "salt", type: "material", sources: ["water", "stone"] },

  { id: "rubber", type: "material", sources: ["crude_oil", "plant"] },

  { id: "wood", type: "material", sources: ["plant"] },

  { id: "copper", type: "material", sources: ["stone"] },
  { id: "gold", type: "material", sources: ["stone"] },
  { id: "silver", type: "material", sources: ["stone"] },
  { id: "limestone", type: "material", sources: ["stone"] },
  { id: "rare_earth", type: "material", sources: ["stone"] },
  { id: "steel", type: "material", sources: ["stone"] },

  { id: "asphalt", type: "material", sources: ["crude_oil"] },
  { id: "plastic", type: "material", sources: ["crude_oil"] },
  { id: "nylon", type: "material", sources: ["crude_oil"] },
  { id: "polyester", type: "material", sources: ["crude_oil"] },

  { id: "cement", type: "material", sources: ["stone", "clay"] },

  // ---- goods ----
  {
    id: "pho",
    type: "goods",
    components: ["rice", "water", "papaya", "lime", "beef", "pork"],
  },
  { id: "bread", type: "goods", components: ["wheat", "water", "salt"] },
  { id: "tooth_brush", type: "goods", components: ["nylon", "plastic"] },

  {
    id: "cpu",
    type: "goods",
    components: ["silicon", "copper", "gold", "silver", "plastic"],
  },
  {
    id: "electric motor",
    type: "goods",
    components: ["rare_earth", "copper", "gold", "plastic", "silver", "steel"],
  },
  {
    id: "straw",
    type: "goods",
    components: ["plastic"],
  },
  {
    id: "road",
    type: "goods",
    components: ["asphalt", "clay"],
  },
  {
    id: "cloth",
    type: "goods",
    components: ["silkworm", "polyester"],
  },
];
