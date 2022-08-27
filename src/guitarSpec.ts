import { Builder, Type, Wood } from "./enums";

export class GuitarSpec {
  constructor(
    private builder: Builder,
    private model: string,
    private type: Type,
    private numStrings: number,
    private backWood: Wood,
    private topWood: Wood
  ) {}

  getBuilder(): Builder {
    return this.builder;
  }

  getModel(): string {
    return this.model;
  }

  getType(): Type {
    return this.type;
  }

  getNumStrings(): number {
    return this.numStrings;
  }

  getBackWood(): Wood {
    return this.backWood;
  }

  getTopWood(): Wood {
    return this.topWood;
  }

  matches(guitarSpec: GuitarSpec): boolean {
    if (
      this.getBuilder() !== guitarSpec.getBuilder() ||
      this.getNumStrings() !== guitarSpec.getNumStrings() ||
      this.getBackWood() !== guitarSpec.getBackWood() ||
      this.getTopWood() !== guitarSpec.getTopWood()
    )
      return false;

    if (
      this.getModel() &&
      this.getModel().toLowerCase() !== guitarSpec.getModel().toLowerCase()
    )
      return false;

    return true;
  }
}
