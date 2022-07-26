import { InstrumentSpec } from "./instrumentSpec";

export class Instrument {
  constructor(
    private serialNumber: string,
    private price: number,
    private spec: InstrumentSpec
  ) {}

  getSerialNumber = (): string => {
    return this.serialNumber;
  };

  setPrice = (price: number) => {
    this.price = price;
  };

  getPrice = (): number => {
    return this.price;
  };

  getSpec = (): InstrumentSpec => {
    return this.spec;
  };
}
