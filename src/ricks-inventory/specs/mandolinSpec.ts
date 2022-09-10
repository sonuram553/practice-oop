import { Builder, Style, Type, Wood } from "../enums";
import { InstrumentSpec } from "./instrumentSpec";

export class MandolinSpec extends InstrumentSpec {
  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood,
    private style: Style
  ) {
    super(builder, model, type, backWood, topWood);
  }

  getStyle = (): Style => {
    return this.style;
  };

  matches(spec: MandolinSpec): boolean {
    if (!super.matches(spec)) return false;
    if (this.getStyle() !== spec.getStyle()) return false;

    return false;
  }
}
