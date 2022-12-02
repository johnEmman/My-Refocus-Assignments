// Task 1. Temperature converter

// You are asked to implement a feature for a weather app. This feature takes the
// temperature in Manila from the servers of PAGASA and converts it from one scale
// to another.

// Implement 2 functions:

// convertToKelvin(tempCelsius) that converts Celsius to Kelvin
// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin



let temp = 30;

//                       convertToKelvin(tempCelsius) that converts Celsius to Kelvin
function empCelsius(){
    return temp + 273.15;
}

//                       convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin
function tempFahrenheit(){
    return (temp - 32) * 5/9 + 273.15;
}
console.log(empCelsius(temp));
console.log(tempFahrenheit(temp));
