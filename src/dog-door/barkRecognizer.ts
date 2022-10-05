import { Bark } from "./bark";
import { DogDoor } from "./dogDoor";

export class BarkRecognizer {
  constructor(private door: DogDoor) {}

  recognize(bark: Bark) {
    const allowedBarks = this.door.getAllowedBarks();

    for (const allowedBark of allowedBarks) {
      if (bark.equals(allowedBark)) {
        this.door.open();
        return;
      }
    }
  }
}
