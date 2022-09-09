import { GuitarSpec } from "./specs/guitarSpec";
import { Instrument } from "./instrument";

export class Guitar extends Instrument {
  constructor(serialNumber: string, price: number, spec: GuitarSpec) {
    super(serialNumber, price, spec);
  }
}
