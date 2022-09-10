import { DogDoor } from "./dogDoor";

export class Remote {
  constructor(private door: DogDoor) {}

  pressButton(): void {
    console.log("Pressing the remote control button...");
    if (this.door.isOpen()) this.door.close();
    else this.door.open();
  }
}
