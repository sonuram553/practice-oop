import { Guitar } from "./guitar";
import { Instrument } from "./instrument";
import { Mandolin } from "./mandolin";
import { GuitarSpec } from "./specs/guitarSpec";
import { InstrumentSpec } from "./specs/instrumentSpec";
import { MandolinSpec } from "./specs/mandolinSpec";

export class Inventory {
  private inventory: Instrument[] = [];

  addInstrument = (
    serialNumber: string,
    price: number,
    spec: InstrumentSpec
  ) => {
    let instrument: Instrument | void;

    if (spec instanceof GuitarSpec)
      instrument = new Guitar(serialNumber, price, spec);
    else if (spec instanceof MandolinSpec)
      instrument = new Mandolin(serialNumber, price, spec);

    if (instrument) this.inventory.push(instrument);
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
