import { Roast } from "./types";

export default [
  {
    name: "Yirgacheffe",
    origin: "Ethiopia",
    roaster: "Old Town Roasters",
    price: 15,
    weight: 250,
    roast: Roast.Medium,
    flavorNotes: ["blueberry", "citrus", "floral"],
  },
  {
    name: "Winter Kenya Blend",
    origin: "Kenya",
    roaster: "Pike Place Roasters",
    price: 20,
    weight: 250,
    roast: Roast.Light,
    flavorNotes: ["black currant", "cocoa", "spice"],
  },
  {
    name: "Pantano",
    origin: "Brazil",
    roaster: "Dreamland Roasters",
    price: 18,
    weight: 250,
    roast: Roast.Dark,
    flavorNotes: ["nutty", "chocolate", "caramel"],
  },
];
