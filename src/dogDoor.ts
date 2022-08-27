import { Bark } from "./bark";
import { wait } from "./util";

export class DogDoor {
  constructor(
    private _open: boolean = false,
    private allowedBarks: Bark[] = []
  ) {}

  open = (): void => {
    this._open = true;
    console.log("The dog door opens.");
    wait(5000).then(this.close);
  };

  close = (): void => {
    this._open = false;
    console.log("The dog door closes.");
  };

  isOpen = (): boolean => {
    return this._open;
  };

  getAllowedBarks = (): Bark[] => {
    return this.allowedBarks;
  };

  addAllowedBark = (bark: Bark) => {
    this.allowedBarks.push(bark);
  };
}
