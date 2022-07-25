export class DogDoor {
  private _open: boolean = false;

  open(): void {
    this._open = true;
    console.log("The dog door opens.");
  }

  close(): void {
    this._open = false;
    console.log("The dog door closes.");
  }

  isOpen(): boolean {
    return this._open;
  }
}
