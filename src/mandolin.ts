import { Instrument } from "./instrument";
import { MandolinSpec } from "./specs/mandolinSpec";

export class Mandolin extends Instrument {
  constructor(serialNumber: string, price: number, spec: MandolinSpec) {
    super(serialNumber, price, spec);
  }
}
