//task 1:

//toCelsius
console.log("Celsius to kelvin")
function toCelsius(cel){
    var kel = cel + 273.15 ;
    return kel;
}
console.log(toCelsius(95));

//toFahrenheit
console.log("fahrenheit to kelvin")
function toFahrenheit(fahr){
    let kel = (fahr + 459.67) * 5/9;
    return kel;
}
console.log(toFahrenheit(35))

//===============================================
console.log("=====================================")
//task 2:

// Tip calculator
console.log("tip calculator")
function computeTip(totalBill){
    let tip = (totalBill / 100) * 10;
    console.log(tip)
}
computeTip(1000)