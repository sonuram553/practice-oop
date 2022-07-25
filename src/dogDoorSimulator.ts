import { DogDoor } from "./dogDoor";
import { Remote } from "./remote";

const door: DogDoor = new DogDoor();
const remote: Remote = new Remote(door);

console.log("Fido barks to go outside...");
remote.pressButton();

console.log("\nFido has gone outside...");
remote.pressButton();

console.log("\nFido's all done...");
remote.pressButton();

console.log("\nFido's back inside...");
remote.pressButton();
