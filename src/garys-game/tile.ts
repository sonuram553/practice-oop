import Unit from "./unit";

export default class Tile {
  private units: Unit[] = [];

  addUnit(unit: Unit) {
    this.units.push(unit);
  }

  removeUnit(unit: Unit) {
    this.units = this.units.filter((_unit) => _unit !== unit);
  }

  removeUnits() {
    this.units = [];
  }

  getUnits(): Unit[] {
    return this.units;
  }
}
