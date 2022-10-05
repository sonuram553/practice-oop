interface Weapon {}

export default class Unit {
  private type: string;
  private name: string;
  private weapons: Weapon[];
  private properties: { [key: string]: Object };

  constructor(private id: number) {}

  getId(): number {
    return this.id;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string) {
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  addWeapon(weapon: Weapon) {
    if (!this.weapons) this.weapons = [];
    this.weapons.push(weapon);
  }

  getWeapons(): Weapon[] {
    return this.weapons;
  }

  setProperty(property: string, value: Object) {
    if (!this.properties) this.properties = {};
    this.properties[property] = value;
  }

  getProperty(property: string): Object | null {
    if (!this.properties) return null;
    return this.properties[property];
  }
}
