export default class Station {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  equals(obj: Object): boolean {
    if (obj instanceof Station) {
      return obj.getName().toLowerCase() === this.name.toLowerCase();
    }

    return false;
  }
}
