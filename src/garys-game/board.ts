import Tile from "./tile";
import Unit from "./unit";

export default class Board {
  private tiles: Tile[][] = [];

  constructor(private width: number, private height: number) {
    this.initialize();
  }

  private initialize() {
    for (let row = 0; row < this.width; row++) {
      this.tiles[row] = [];
      for (let col = 0; col < this.height; col++) {
        this.tiles[row].push(new Tile());
      }
    }
  }

  getTile(x: number, y: number): Tile {
    return this.tiles[x - 1][y - 1];
  }

  addUnit(unit: Unit, x: number, y: number) {
    const tile = this.getTile(x, y);
    tile.addUnit(unit);
  }

  removeUnit(unit: Unit, x: number, y: number) {
    const tile = this.getTile(x, y);
    tile.removeUnit(unit);
  }

  removeUnits(x: number, y: number) {
    const tile = this.getTile(x, y);
    tile.removeUnits();
  }

  getUnits(x: number, y: number) {
    return this.getTile(x, y).getUnits();
  }
}
