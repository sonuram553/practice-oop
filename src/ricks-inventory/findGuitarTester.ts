import { Builder, InstrumentType, Type, Wood } from "./enums";
import { Instrument } from "./instrument";
import { InstrumentSpec } from "./instrumentSpec";
import { Inventory } from "./inventory";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes: InstrumentSpec = new InstrumentSpec({
  builder: Builder.FENDER,
  model: "Stratocastor",
  type: Type.ELECTRIC,
  numStrings: 12,
  backWood: Wood.ALDER,
  topWood: Wood.ALDER,
  instrumentType: InstrumentType.GUITAR,
});

const matchingGuitars: Instrument[] = inventory.search(whatErinLikes);

// Loop through matchingGuitars and print

function initializeInventory(inventory: Inventory) {}
