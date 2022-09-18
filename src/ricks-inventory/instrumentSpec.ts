type Properties = { [key: string]: any };

export abstract class InstrumentSpec {
  constructor(private properties: Properties = {}) {}

  getProperty(propertyName: string): any {
    return this.properties[propertyName];
  }

  getProperties(): Properties {
    return this.properties;
  }

  matches(spec: InstrumentSpec): boolean {
    for (const propertyName in this.properties) {
      if (this.getProperty(propertyName) !== spec.getProperty(propertyName))
        return false;
    }

    return true;
  }
}
