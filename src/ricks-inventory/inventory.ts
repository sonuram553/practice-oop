import { Instrument } from "./instrument";
import { InstrumentSpec } from "./instrumentSpec";

export class Inventory {
  private inventory: Instrument[] = [];

  addInstrument = (
    serialNumber: string,
    price: number,
    spec: InstrumentSpec
  ) => {
    this.inventory.push(new Instrument(serialNumber, price, spec));
  };

  getInstrument(serialNumber: string): Instrument | void {
    for (const instrument of this.inventory) {
      if (instrument.getSerialNumber() === serialNumber) return instrument;
    }
  }

  search(spec: InstrumentSpec): Instrument[] {
    const result: Instrument[] = [];

    for (const instrument of this.inventory) {
      const instrumentSpec = instrument.getSpec();
      if (instrumentSpec.matches(spec)) result.push(instrument);
    }

    return result;
  }
}
