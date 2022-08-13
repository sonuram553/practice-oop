import { DogDoor } from "./dogDoor";
import { wait } from "./util";

export class Remote {
  constructor(private door: DogDoor) {}

  pressButton(): void {
    console.log("Pressing the remote control button...");
    if (this.door.isOpen()) this.door.close();
    else {
      this.door.open();
      wait(5000).then(this.door.close);
    }
  }
}
