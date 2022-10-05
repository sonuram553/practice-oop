import Unit from "./unit";
import UnitTester from "./unit-tester";

const unitTester = new UnitTester();
const unit = new Unit(100);

unitTester.testType(unit, "infantry", "infantry");
unitTester.testUnitSpecificProperty(unit, "hitPoints", 15, 15);
unitTester.testChangeProperty(unit, "hitPoints", 25, 25);
unitTester.testNonExitingProperty(unit, "strength");
