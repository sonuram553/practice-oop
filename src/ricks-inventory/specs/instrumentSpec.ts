import { Builder, Type, Wood } from "../enums";

export abstract class InstrumentSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private backWood: Wood,
    private topWood: Wood
  ) {}

  getBuilder = (): Builder => {
    return this.builder;
  };

  getModel = (): string => {
    return this.model;
  };

  getType = (): Type => {
    return this.type;
  };

  getBackWood = (): Wood => {
    return this.backWood;
  };

  getTopWood = (): Wood => {
    return this.topWood;
  };

  matches(spec: InstrumentSpec): boolean {
    if (
      this.getBuilder() !== spec.getBuilder() ||
      this.getBackWood() !== spec.getBackWood() ||
      this.getTopWood() !== spec.getTopWood()
    )
      return false;

    if (
      this.getModel() &&
      this.getModel().toLowerCase() !== spec.getModel().toLowerCase()
    )
      return false;

    return true;
  }
}
