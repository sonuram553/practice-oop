import SubwayLoader from "./subway-loader";

(async function () {
  const subwayLoader = new SubwayLoader();
  const subway = await subwayLoader.loadFromFile("./subway.txt");

  console.log(subway);
})();
