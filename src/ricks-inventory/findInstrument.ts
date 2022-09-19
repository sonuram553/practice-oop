import { Builder, InstrumentType, Type, Wood } from "./enums";
import { Instrument } from "./instrument";
import { InstrumentSpec } from "./instrumentSpec";
import { Inventory } from "./inventory";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const clientSpec = new InstrumentSpec({
  builder: Builder.GIBSON,
  backWood: Wood.MAPLE,
});

printMatchingInstruments(inventory.search(clientSpec));

function initializeInventory(inventory: Inventory) {
  // Guitars
  inventory.addInstrument(
    "11277",
    3999.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.GUITAR,
      builder: Builder.COLLINGS,
      model: "CJ",
      type: Type.ACOUSTIC,
      numStrings: 6,
      topWood: Wood.INDIAN_ROSEWOOD,
      backWood: Wood.SITKA,
    })
  );

  inventory.addInstrument(
    "122784",
    5495.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.GUITAR,
      builder: Builder.MARTIN,
      model: "D-18",
      type: Type.ACOUSTIC,
      numStrings: 6,
      topWood: Wood.MAHOGANY,
      backWood: Wood.ADIRONDACK,
    })
  );

  inventory.addInstrument(
    "V95693",
    1499.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.GUITAR,
      builder: Builder.FENDER,
      model: "Stratocastor",
      type: Type.ELECTRIC,
      numStrings: 6,
      topWood: Wood.ALDER,
      backWood: Wood.ALDER,
    })
  );

  inventory.addInstrument(
    "V9512",
    1549.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.GUITAR,
      builder: Builder.FENDER,
      model: "Stratocastor",
      type: Type.ELECTRIC,
      numStrings: 6,
      topWood: Wood.ALDER,
      backWood: Wood.ALDER,
    })
  );

  inventory.addInstrument(
    "82765501",
    1890.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.GUITAR,
      builder: Builder.GIBSON,
      model: "SG'61 Reissue",
      type: Type.ELECTRIC,
      numStrings: 6,
      topWood: Wood.MAHOGANY,
      backWood: Wood.MAHOGANY,
    })
  );

  inventory.addInstrument(
    "70108276",
    2295.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.GUITAR,
      builder: Builder.GIBSON,
      model: "Les Paul",
      type: Type.ELECTRIC,
      numStrings: 6,
      topWood: Wood.MAPLE,
      backWood: Wood.MAPLE,
    })
  );

  // Mandolins
  inventory.addInstrument(
    "9019920",
    5495.99,
    new InstrumentSpec({
      instrumentType: InstrumentType.MANDOLIN,
      builder: Builder.GIBSON,
      model: "F5-G",
      type: Type.ACOUSTIC,
      topWood: Wood.MAPLE,
      backWood: Wood.MAPLE,
    })
  );

  // Banjos
  inventory.addInstrument(
    "8900231",
    2945.95,
    new InstrumentSpec({
      instrumentType: InstrumentType.BANJO,
      builder: Builder.GIBSON,
      model: "RB-3",
      type: Type.ACOUSTIC,
      numStrings: 5,
      backWood: Wood.MAPLE,
    })
  );
}

function printMatchingInstruments(instruments: Instrument[]) {
  if (instruments.length) {
    console.log("You might like these instruments:");
    for (const instrument of instruments) {
      const spec = instrument.getSpec();
      console.log(
        `We have a ${spec.getProperty(
          "instrumentType"
        )} with the following properties:`
      );

      for (const propertyName in spec.getProperties()) {
        if (propertyName === "instrumentType") continue;
        console.log(`  ${propertyName}: ${spec.getProperty(propertyName)}`);
      }

      console.log(
        `  You can have this ${spec.getProperty(
          "instrumentType"
        )} for $${instrument.getPrice()}`
      );
      console.log("---");
    }
  } else console.log("No instrument found!");
}
