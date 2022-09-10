export class Bark {
  constructor(private sound: string) {}

  getSound = (): string => {
    return this.sound;
  };

  equals = (bark: Bark): boolean => {
    return this.sound.toLowerCase() === bark.getSound().toLocaleLowerCase();
  };
}
