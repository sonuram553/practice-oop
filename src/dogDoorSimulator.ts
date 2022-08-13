// BarkRecognizer will opens the door when it hears the bark
// No need of remote or human interaction

import { BarkRecognizer } from "./barkRecognizer";
import { DogDoor } from "./dogDoor";
import { wait } from "./util";

const door: DogDoor = new DogDoor();
const recognizer: BarkRecognizer = new BarkRecognizer(door);

console.log("Fido starts barking.");
recognizer.recognize("Woof");

console.log("Fido has gone outside...");

wait(7000).then(() => {
  console.log("\nFido's all done...");
  console.log("Fido barks to come inside...");
  recognizer.recognize("Woof");
  console.log("Fido's back inside...");
});
