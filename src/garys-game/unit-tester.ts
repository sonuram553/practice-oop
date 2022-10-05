import Unit from "./unit";

export default class UnitTester {
  testType(unit: Unit, inputType: string, expectedOutput: string) {
    console.log("\nTesting setting/getting the type property...");

    unit.setType(inputType);
    const outputType = unit.getType();

    if (outputType === expectedOutput) console.log("Test Passed!");
    else
      console.log("Test Failed!", outputType, "didn't match", expectedOutput);
  }

  testUnitSpecificProperty(
    unit: Unit,
    propertyName: string,
    inputValue: Object,
    expectedOutput: Object
  ) {
    console.log("\nTesting setting/getting of unit specific property...");

    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);

    if (outputValue === expectedOutput) console.log("Test Passed!");
    else
      console.log("Test Failed!", outputValue, "didn't match", expectedOutput);
  }

  // Initially unit should have the given property with a value
  testChangeProperty(
    unit: Unit,
    propertyName: string,
    inputValue: Object,
    expectedOutput: Object
  ) {
    console.log("\nTesting changing an existing property's value...");

    unit.setProperty(propertyName, inputValue);
    const outputValue = unit.getProperty(propertyName);

    if (outputValue === expectedOutput) console.log("Test Passed!");
    else
      console.log("Test Failed!", outputValue, "didn't match", expectedOutput);
  }

  testNonExitingProperty(unit: Unit, propertyName: string) {
    console.log("\nTesting non-existing property's value...");
    const outputValue = unit.getProperty(propertyName);

    if (outputValue === undefined) console.log("Test Passed!");
    else console.log("Test Failed!", outputValue, "didn't match", undefined);
  }
}
