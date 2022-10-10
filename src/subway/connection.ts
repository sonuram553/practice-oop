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
}
