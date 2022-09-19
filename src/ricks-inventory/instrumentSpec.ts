type Properties = { [key: string]: any };

export class InstrumentSpec {
  constructor(private properties: Properties = {}) {}

  getProperty(propertyName: string): any {
    return this.properties[propertyName];
  }

  getProperties(): Properties {
    return this.properties;
  }

  matches(otherSpec: InstrumentSpec): boolean {
    for (const propertyName in otherSpec.getProperties()) {
      if (
        otherSpec.getProperty(propertyName) !== this.getProperty(propertyName)
      )
        return false;
    }

    return true;
  }
}
