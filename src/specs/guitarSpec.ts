import { Builder, Type, Wood } from "../enums";
import { InstrumentSpec } from "./instrumentSpec";

export class GuitarSpec extends InstrumentSpec {
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    private numStrings: number,
    backWood: Wood,
    topWood: Wood
  ) {
    super(builder, model, type, backWood, topWood);
  }

  getNumStrings = (): number => {
    return this.numStrings;
  };

  matches(spec: GuitarSpec): boolean {
    if (!super.matches(spec)) return false;
    if (this.getNumStrings() !== spec.getNumStrings()) return false;

    return true;
  }
}
