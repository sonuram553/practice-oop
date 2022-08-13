import { DogDoor } from "./dogDoor";
import { Remote } from "./remote";
import { wait } from "./util";

const door: DogDoor = new DogDoor();
const remote: Remote = new Remote(door);

console.log("Fido barks to go outside...");
remote.pressButton();

console.log("Fido has gone outside...");
// remote.pressButton();

wait(7000).then(() => {
  console.log("\nFido's all done...");
  console.log("Fido barks to come inside...");
  remote.pressButton();
  console.log("Fido's back inside...");
});

// remote.pressButton();

// console.log("\nFido's back inside...");
// remote.pressButton();
