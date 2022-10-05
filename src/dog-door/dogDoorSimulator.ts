import { Bark } from "./bark";
import { BarkRecognizer } from "./barkRecognizer";
import { DogDoor } from "./dogDoor";
import { Remote } from "./remote";
import { wait } from "../util";

(async function () {
  const door: DogDoor = new DogDoor();
  door.addAllowedBark(new Bark("rowlf"));
  door.addAllowedBark(new Bark("rooowlf"));
  door.addAllowedBark(new Bark("rawlf"));
  door.addAllowedBark(new Bark("woof"));

  const recognizer: BarkRecognizer = new BarkRecognizer(door);
  const remote: Remote = new Remote(door);

  console.log("Bruce starts barking.");
  recognizer.recognize(new Bark("rowlf"));

  console.log("Bruce has gone outside...");

  await wait(10000);

  console.log("\nBruce is all done...");
  console.log("...but he's stuck outside!");

  const smallDogBark = new Bark("yip");
  console.log("A small dog starts barking.");
  recognizer.recognize(smallDogBark);

  await wait(5000);

  console.log("\nBruce starts barking.");
  recognizer.recognize(new Bark("rooowlf"));
  console.log("Bruce is back inside...");
})();
