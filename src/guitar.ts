import { GuitarSpec } from "./guitarSpec";

export class Guitar {
  constructor(
    private serialNumber: string,
    private price: number,
    private spec: GuitarSpec
  ) {}

  getSerialNumber(): string {
    return this.serialNumber;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
  }

  getSpec(): GuitarSpec {
    return this.spec;
  }
}
