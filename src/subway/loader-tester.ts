import SubwayLoader from "./subway-loader";

(async function () {
  const subwayLoader = new SubwayLoader();
  const subway = await subwayLoader.loadFromFile("./subway.txt");

  if (subway) {
    console.assert(subway.hasStation("Head First Lounge"));
    console.assert(subway.hasStation("Ajax Rapids"));
    console.assert(subway.hasStation("JavaBeans Boulevard"));
    console.assert(subway.hasStation("ABC") === false);

    console.assert(
      subway.hasConnection("Ajax Rapids", "HTML Heights", "Booch Line")
    );
    console.assert(
      subway.hasConnection("HTML Heights", "Ajax Rapids", "Booch Line")
    );
  }
})();
