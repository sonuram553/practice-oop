import Subway from "./subway";
import { readFile } from "fs/promises";

export default class SubwayLoader {
  async loadFromFile(file: string): Promise<Subway | undefined> {
    try {
      const subway = new Subway([], []);
      const data = (await readFile(file)).toString().split("\n");
      const index = data.findIndex((line) => line === "\n");
      this.loadStations(subway, data.slice(0, index));
      this.loadLines(subway, data.slice(index));
      return subway;
    } catch (err) {
      console.error(err);
    }
  }

  private loadStations(subway: Subway, stations: string[]) {
    stations.forEach((station) => subway.addStation(station));
  }

  private loadLines(subway: Subway, lines: string[]) {
    let i = 0;
    let lineName = "";

    while (i + 1 < lines.length) {
      if (lines[i] === "\n") {
        i++;
        lineName = lines[i++];
      } else {
        const station1Name = lines[i];
        const station2Name = lines[i + 1];

        i++;

        if (lineName && station1Name && station2Name) {
          subway.addConnection(station1Name, station2Name, lineName);
        }
      }
    }
  }
}
