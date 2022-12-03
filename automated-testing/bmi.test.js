const BMIFunc = require("./bmi_calculator.js");


test("Checks if result === expected", () => {
    expect(BMIFunc(55, 5)).toBe("Underweight")
})