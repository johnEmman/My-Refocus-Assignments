const BMIFunc = require("./bmi_calculator.js");


test("if true", () => {
    expect(BMIFunc(55, 5)).toBe("Underweight")
})