import { DogDoor } from "./dogDoor";

export class BarkRecognizer {
  constructor(private door: DogDoor) {}

  recognize(bark: string) {
    console.log(`BarkRecognizer: Heard a '${bark}'`);
    this.door.open();
  }
}
