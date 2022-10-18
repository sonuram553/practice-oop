import Subway from "./subway";
import { readFile } from "fs/promises";

export default class SubwayLoader {
  subway: Subway = new Subway([], []);

  async loadFromFile(file: string) {
    const data = (await readFile("./data.txt")).toString().split("\n");
    const index = data.findIndex((line) => line === "\n");
    this.loadStations(data.slice(0, index));
    this.loadLines(data.slice(index));

    return this.subway;
  }

  private loadStations(stations: string[]) {
    stations.forEach((station) => this.subway.addStation(station));
  }

  private loadLines(lines: string[]) {
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
          this.subway.addConnection(station1Name, station2Name, lineName);
        }
      }
    }
  }
}
