import Connection from "./connection";
import Station from "./station";

export default class Subway {
  constructor(private stations: Station[], private connections: Connection[]) {}

  addStation(stationName: string) {
    stationName = stationName.trim();
    if (!this.hasStation(stationName)) {
      this.stations.push(new Station(stationName));
    }
  }

  hasStation(stationName: string): boolean {
    return this.stations.some((station) =>
      station.equals(new Station(stationName))
    );
  }

  hasConnection(
    station1Name: string,
    station2Name: string,
    lineName: string
  ): boolean {
    const findConnection = new Connection(
      new Station(station1Name),
      new Station(station2Name),
      lineName
    );
    return this.connections.some((connection) =>
      connection.equals(findConnection)
    );
  }

  addConnection(station1Name: string, station2Name: string, lineName: string) {
    if (this.hasStation(station1Name) && this.hasStation(station2Name)) {
      const station1 = new Station(station1Name);
      const station2 = new Station(station2Name);

      this.connections.push(new Connection(station1, station2, lineName));
      this.connections.push(new Connection(station2, station1, lineName));
    } else throw Error("Invalid connection!");
  }
}
