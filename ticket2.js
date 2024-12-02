//Develop a JavaScript function displayTemperatureInCelsius
// that takes in a numerical Fahrenheit temperature reading
// and converts it to Celsius,
// returning the number representing the Celsius value.
function displayTemperatureInCelsius(farenheit){
    let celsius = (farenheit - 32) * (5/9);
    console.log(celsius + " degrees C");
    return celsius;
}


//Implement another function displayTemperatureInFahrenheit
// that performs the inverse operation.
function displayTemperatureInFarenheit(celsius){
    let farenheit = (celsius * 9/5) + 32;
    console.log(farenheit + " degrees F");
    return farenheit;
}
/*

//Create a function toggleTemperatureDisplay 
function toggleTemperatureDisplay(temperature ){
    let lastShown = "celsius";

    if (lastShown == "celsius"){
        displayTemperatureInFarenheit(temperature);
        lastShown = "farenheit";
        return lastShown;
    }
    else if (lastShown == "farenheit"){
        displayTemperatureInCelsius(temperature);
        lastShown = "celsius"
        return lastShown;
    }

} 
//that returns either Celsius or Fahrenheit depending on which was the last returned 
//(if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa).
//Start with a default of the last returned format being Celsius.

*/
//Create a function toggleTemperatureDisplay 
function toggleTemperatureDisplay(lastShown = "celsius"){
  
    if (lastShown == "celsius") {
        return "farenheit";
    }
    if (lastShown == "farenheit") {
        return "celsius";
    }
}
