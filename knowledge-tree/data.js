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
  { id: "leather", type: "goods", components: ["animal", "crude_oil"] },
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
  { id: "steel", type: "goods", components: ["iron"] },
  { id: "iron", type: "goods", components: ["stone"] },
  { id: "charcoal", type: "goods", components: ["wood"] },
  {
    id: "noodle",
    type: "goods",
    components: ["rice", "egg", "wheat", "water"],
  },

  { id: "uranium", type: "goods", components: ["stone"] },
  { id: "asphalt", type: "goods", components: ["crude_oil"] },
  { id: "plastic", type: "goods", components: ["synthetic_polymer"] },
  { id: "polyester", type: "goods", components: ["crude_oil"] },
  { id: "cement", type: "goods", components: ["stone", "clay"] },
  {
    id: "atomic_bomb",
    type: "goods",
    components: [
      "uranium",
      "steel",
      "semiconductor",
      "copper",
      "gold",
      "plastic",
    ],
  },

  {
    id: "pho",
    type: "goods",
    components: [
      "noodle",
      "water",
      "papaya",
      "lime",
      "beef",
      "pork",
      "chicken",
    ],
  },
  {
    id: "bread",
    type: "goods",
    components: ["wheat", "water", "salt", "yeast"],
  },
  { id: "tooth_brush", type: "goods", components: ["nylon", "plastic"] },
  { id: "yeast", type: "goods", components: ["plant"] },

  {
    id: "CPU",
    type: "goods",
    components: ["semiconductor", "copper", "gold", "silver", "plastic"],
  },
  {
    id: "electric_motor",
    type: "goods",
    components: ["magnet", "copper", "plastic", "silver", "aluminum"],
  },
  {
    id: "straw",
    type: "goods",
    components: ["plastic"],
  },
  {
    id: "fish",
    type: "goods",
    components: ["animal"],
  },
  {
    id: "olive",
    type: "goods",
    components: ["plant"],
  },
  { id: "nylon", type: "goods", components: ["synthetic_polymer"] },

  {
    id: "road",
    type: "goods",
    components: ["asphalt", "clay"],
  },
  {
    id: "cloth",
    type: "goods",
    components: ["silkworm", "polyester", "linen", "wool", "cotton"],
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
    id: "banh_mi",
    type: "goods",
    components: [
      "beef",
      "carrot",
      "cucumber",
      "bread",
      "pork",
      "cooking_oil",
      "salt",
    ],
  },
  {
    id: "pasta",
    type: "goods",
    components: ["wheat"],
  },
  {
    id: "nickel",
    type: "goods",
    components: ["stone"],
  },
  {
    id: "cobalt",
    type: "goods",
    components: ["stone"],
  },
  {
    id: "magnet",
    type: "goods",
    components: ["iron", "rare_earth", "nickel", "cobalt"],
  },
  {
    id: "egg",
    type: "goods",
    components: ["chicken"],
  },
  {
    id: "diamond",
    type: "goods",
    components: ["stone"],
  },
  {
    id: "soybean",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "coagulant",
    type: "goods",
    components: ["stone"],
  },
  {
    id: "vinegar",
    type: "goods",
    components: ["plant", "water"],
  },
  {
    id: "tofu",
    type: "goods",
    components: ["soybean", "water", "coagulant"],
  },
  {
    id: "beer",
    type: "goods",
    components: ["barley", "water", "hops", "yeast"],
  },
  {
    id: "barley",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "hops",
    type: "goods",
    components: ["plant"],
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
    id: "sunflower",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "coconut",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "jasmine",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "ginger",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "mint",
    type: "goods",
    components: ["plant"],
  },
  {
    id: "infusion",
    type: "goods",
    components: ["water", "tea", "sunflower", "ginger", "jasmine", "mint"],
  },

  {
    id: "cooking_oil",
    type: "goods",
    components: ["olive", "sunflower", "coconut"],
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
    components: ["rice", "seaweeds", "salt", "fish"],
  },
  {
    id: "semiconductor",
    type: "goods",
    components: ["silicon"],
  },

  { id: "cassava", type: "goods", components: ["plant"] },
  { id: "avogado", type: "goods", components: ["plant"] },
  { id: "tapioca_pearl", type: "goods", components: ["cassava"] },
  { id: "cucumber", type: "goods", components: ["plant"] },
  { id: "carrot", type: "goods", components: ["plant"] },
  { id: "milk", type: "goods", components: ["animal"] },
  { id: "ice_cream", type: "goods", components: ["milk", "sugar"] },
  { id: "honey", type: "goods", components: ["animal"] },

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
      "semiconductor",
      "glass",
    ],
  },
  {
    id: "light_bulb",
    type: "goods",
    components: ["glass", "steel", "aluminum", "plastic", "semiconductor"],
  },
  {
    id: "washing_machine",
    type: "goods",
    components: ["electric_motor", "steel", "semiconductor"],
  },

  {
    id: "bubble_tea",
    type: "goods",
    components: ["tapioca_pearl", "tea", "sugar", "water", "tea"],
  },
  {
    id: "tea",
    type: "goods",
    components: ["plant"],
  },
  { id: "gasoline", type: "goods", components: ["crude_oil"] },

  { id: "brick", type: "goods", components: ["clay"] },
  { id: "glue", type: "goods", components: ["synthetic_polymer"] },
  {
    id: "synthetic_polymer",
    type: "goods",
    components: ["crude_oil"],
  },
  {
    id: "house",
    type: "goods",
    components: ["wood", "glass", "cement", "steel", "plastic", "brick"],
  },

  {
    id: "satellite",
    type: "goods",
    components: ["semiconductor", "steel", "plastic", "gold", "copper"],
  },

  { id: "paper", type: "goods", components: ["wood"] },
  { id: "wool", type: "goods", components: ["animal"] },
  { id: "graphite", type: "goods", components: ["stone"] },
  { id: "book", type: "goods", components: ["paper"] },
  { id: "aluminum", type: "goods", components: ["stone"] },
  {
    id: "pencil",
    type: "goods",
    components: ["wood", "graphite", "clay", "rubber", "aluminum"],
  },

  { id: "banana", type: "goods", components: ["plant"] },
  { id: "cotton", type: "goods", components: ["plant"] },
  { id: "linen", type: "goods", components: ["plant"] },
  {
    id: "toothpaste",
    type: "goods",
    components: ["water", "abrasives", "surfactants"],
  },
  {
    id: "football",
    type: "goods",
    components: ["leather", "rubber", "polyester", "cotton"],
  },
  { id: "abrasives", type: "goods", components: ["stone", "sand"] },
  { id: "surfactants", type: "goods", components: ["crude_oil"] },
];
