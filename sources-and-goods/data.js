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
  { id: "steel", type: "goods", components: ["iron", "stone"] },
  { id: "iron", type: "goods", components: ["stone"] },
  { id: "charcoal", type: "goods", components: ["wood"] },

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
    id: "CPU",
    type: "goods",
    components: ["silicon", "copper", "gold", "silver", "plastic"],
  },
  {
    id: "electric_motor",
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
  {
    id: "tomato",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "potato",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "onion",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "burger",
    type: "goods",
    components: ["beef", "onion", "tomato"],
  },
  {
    id: "pasta",
    type: "goods",
    components: ["wheat"],
  },
  {
    id: "egg",
    type: "goods",
    components: ["chicken"],
  },
  {
    id: "luggage",
    type: "goods",
    components: ["plastic", "polyester", "nylon", "aluminum", "rubber"],
  },
  {
    id: "apple",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "preservatives",
    type: "goods",
    components: ["crude_oil"],
  },
  {
    id: "shampoo",
    type: "goods",
    components: ["preservatives", "water"],
  },
  {
    id: "seaweeds",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "sushi",
    type: "goods",
    components: ["rice", "seaweeds", "salt"],
  },

  { id: "cassava", type: "goods", components: ["plant"] },
  { id: "tapioca_pearl", type: "goods", components: ["cassava"] },
  { id: "milk", type: "goods", components: ["animal"] },
  { id: "ice_cream", type: "goods", components: ["milk", "sugar"] },

  {
    id: "shoe",
    type: "goods",
    components: ["leather", "rubber", "plastic", "nylon", "polyester"],
  },

  { id: "table", type: "goods", components: ["wood", "steel"] },
  { id: "refrigerant", type: "goods", components: ["crude_oil"] },
  {
    id: "air_conditioner",
    type: "goods",
    components: [
      "refrigerant",
      "steel",
      "copper",
      "aluminum",
      "plastic",
      "silicon",
      "glass",
    ],
  },
  {
    id: "light_bulb",
    type: "goods",
    components: ["glass", "steel", "aluminum", "plastic", "silicon"],
  },

  { id: "gasoline", type: "goods", components: ["crude_oil"] },

  { id: "brick", type: "goods", components: ["clay"] },
  {
    id: "house",
    type: "goods",
    components: ["wood", "glass", "cement", "steel", "plastic"],
  },

  {
    id: "satellite",
    type: "goods",
    components: ["silicon", "steel", "plastic", "gold", "copper"],
  },

  { id: "paper", type: "goods", components: ["wood"] },
  { id: "graphite", type: "goods", components: ["stone"] },
  { id: "book", type: "goods", components: ["paper"] },
  { id: "aluminum", type: "goods", components: ["stone"] },
  {
    id: "pencil",
    type: "goods",
    components: ["wood", "graphite", "clay", "rubber", "aluminum"],
  },
  { id: "pen", type: "goods", components: ["plastic"] },

  { id: "soap", type: "goods", components: ["plant"] },
  { id: "banana", type: "goods", components: ["plant"] },
  {
    id: "toothpaste",
    type: "goods",
    components: ["water", "abrasives", "surfactants"],
  },
  { id: "football", type: "goods", components: ["leather", "rubber"] },
  { id: "abrasives", type: "goods", components: ["stone", "sand"] },
  { id: "surfactants", type: "goods", components: ["crude_oil"] },
];
