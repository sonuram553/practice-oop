import { Builder, Type, Wood } from "./enums";
import { Guitar } from "./guitar";
import { GuitarSpec } from "./specs/guitarSpec";
import { Inventory } from "./inventory";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes: GuitarSpec = new GuitarSpec(
  Builder.FENDER,
  "Stratocastor",
  Type.ELECTRIC,
  12,
  Wood.ALDER,
  Wood.ALDER
);

const matchingGuitars: Guitar[] = inventory.search(whatErinLikes);

// Loop through matchingGuitars and print

function initializeInventory(inventory: Inventory) {}
