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
    components: ["plastic"],
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

  { id: "cake", type: "goods", components: ["wheat", "egg", "sugar"] },
  { id: "ice_cream", type: "goods", components: ["milk", "sugar"] },

  { id: "shoes", type: "goods", components: ["leather", "rubber", "plastic"] },

  { id: "table", type: "goods", components: ["wood", "steel"] },
  { id: "bed", type: "goods", components: ["wood", "cloth"] },
  { id: "cabinet", type: "goods", components: ["wood"] },

  // Electronics
  { id: "phone", type: "goods", components: ["cpu", "glass", "plastic"] },
  { id: "laptop", type: "goods", components: ["cpu", "glass", "plastic"] },
  { id: "television", type: "goods", components: ["glass", "plastic", "cpu"] },
  { id: "camera", type: "goods", components: ["glass", "plastic", "cpu"] },
  { id: "keyboard", type: "goods", components: ["plastic"] },
  { id: "mouse", type: "goods", components: ["plastic"] },

  // Kitchen
  { id: "plate", type: "goods", components: ["clay"] },
  { id: "cup", type: "goods", components: ["glass"] },
  { id: "knife", type: "goods", components: ["steel"] },
  { id: "fork", type: "goods", components: ["steel"] },
  { id: "spoon", type: "goods", components: ["steel"] },
  { id: "bottle", type: "goods", components: ["glass"] },

  // Construction
  { id: "brick", type: "goods", components: ["clay"] },
  { id: "wall", type: "goods", components: ["brick", "cement"] },
  {
    id: "house",
    type: "goods",
    components: ["wood", "glass", "cement", "steel"],
  },
  { id: "bridge", type: "goods", components: ["steel", "cement"] },

  // Transport
  {
    id: "car",
    type: "goods",
    components: ["steel", "glass", "plastic", "rubber"],
  },
  { id: "bicycle", type: "goods", components: ["steel", "rubber"] },
  {
    id: "motorcycle",
    type: "goods",
    components: ["steel", "plastic", "rubber"],
  },
  { id: "airplane", type: "goods", components: ["steel", "plastic"] },
  {
    id: "satellite",
    type: "goods",
    components: ["silicon", "steel", "plastic", "gold", "copper"],
  },

  // Stationery
  { id: "paper", type: "goods", components: ["wood"] },
  { id: "book", type: "goods", components: ["paper"] },
  { id: "pencil", type: "goods", components: ["wood"] },
  { id: "pen", type: "goods", components: ["plastic"] },

  // Bathroom
  { id: "soap", type: "goods", components: ["plant"] },
  { id: "toothpaste", type: "goods", components: ["water", "plant"] },
  // Toys
  { id: "football", type: "goods", components: ["leather", "rubber"] },
  { id: "doll", type: "goods", components: ["cloth", "plastic"] },
];
