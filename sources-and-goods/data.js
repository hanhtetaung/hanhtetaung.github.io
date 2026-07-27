const ELEMENTS = [
  // ---- sources (7) ----
  { id: "plant", type: "source" },
  { id: "crude_oil", type: "source" },
  { id: "animal", type: "source" },
  { id: "sand", type: "source" },
  { id: "clay", type: "source" },
  { id: "stone", type: "source" },
  { id: "water", type: "source" },

  // ---- goods ----
  { id: "beef", type: "goods", components: ["animal"] },
  { id: "pork", type: "goods", components: ["animal"] },
  { id: "silkworm", type: "goods", components: ["animal"] },
  { id: "chicken", type: "goods", components: ["animal"] },
  { id: "leather", type: "goods", components: ["animal"] },

  { id: "rice", type: "goods", components: ["plant"] },
  { id: "wheat", type: "goods", components: ["plant"] },
  { id: "sugar", type: "goods", components: ["plant"] },
  { id: "papaya", type: "goods", components: ["plant"] },
  { id: "lime", type: "goods", components: ["plant"] },

  { id: "glass", type: "goods", components: ["sand"] },
  { id: "silicon", type: "goods", components: ["sand"] },

  { id: "salt", type: "goods", components: ["water", "stone"] },

  { id: "rubber", type: "goods", components: ["crude_oil", "plant"] },

  { id: "wood", type: "goods", components: ["plant"] },

  { id: "copper", type: "goods", components: ["stone"] },
  { id: "gold", type: "goods", components: ["stone"] },
  { id: "silver", type: "goods", components: ["stone"] },
  { id: "limestone", type: "goods", components: ["stone"] },
  { id: "rare_earth", type: "goods", components: ["stone"] },
  { id: "steel", type: "goods", components: ["stone"] },
  { id: "iron", type: "goods", components: ["stone"] },
  { id: "uranium", type: "goods", components: ["stone"] },

  { id: "asphalt", type: "goods", components: ["crude_oil"] },
  { id: "plastic", type: "goods", components: ["crude_oil"] },
  { id: "polyester", type: "goods", components: ["crude_oil"] },

  { id: "cement", type: "goods", components: ["stone", "clay"] },
  {
    id: "atomic_bomb",
    type: "goods",
    components: ["uranium", "steel", "silicon", "copper", "gold", "plastic"],
  },

  {
    id: "pho",
    type: "goods",
    components: ["rice", "water", "papaya", "lime", "beef", "pork", "chicken"],
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
    id: "olive_oil",
    type: "goods",
    components: ["plant"],
  },
  { id: "nylon", type: "goods", components: ["crude_oil"] },

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
  {
    id: "chair",
    type: "goods",
    components: ["wood", "plastic", "leather"],
  },
  {
    id: "sugarcane",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "sugar",
    type: "goods",
    components: ["sugarcane"],
  },
];
