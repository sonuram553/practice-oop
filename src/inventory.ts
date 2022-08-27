import { Guitar } from "./guitar";
import { GuitarSpec } from "./guitarSpec";

export class Inventory {
  private guitars: Guitar[] = [];

  addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
    const guitar: Guitar = new Guitar(serialNumber, price, spec);
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: string): Guitar | void {
    for (const guitar of this.guitars) {
      if (guitar.getSerialNumber() === serialNumber) return guitar;
    }
  }

  search(searchSpec: GuitarSpec): Guitar[] {
    const result: Guitar[] = [];

    for (const guitar of this.guitars) {
      const guitarSpec = guitar.getSpec();
      if (guitarSpec.matches(searchSpec)) result.push(guitar);
    }

    return result;
  }
}
