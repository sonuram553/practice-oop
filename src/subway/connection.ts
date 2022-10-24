import Station from "./station";

export default class Connection {
  constructor(
    private station1: Station,
    private station2: Station,
    private lineName: string
  ) {}

  getStation1(): Station {
    return this.station1;
  }

  getStation2(): Station {
    return this.station2;
  }

  getLineName(): string {
    return this.lineName;
  }

  equals(connection: Connection): boolean {
    if (
      this.station1.equals(connection.station1) &&
      this.station2.equals(connection.station2) &&
      this.lineName === connection.lineName
    )
      return true;
    return false;
  }
}
