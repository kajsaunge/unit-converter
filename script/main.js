var constant = 32;
var celsiusTemp = "";

function fahrenheitToCelsius(temperature) {
    var celsiusTemp = (temperature - constant) / 1.8;
    return Math.round(celsiusTemp) + "°C";
}
function resetform() {
document.getElementById("fahrenheitForm").reset();
}


function showResult() {
    var temperature = document.getElementById("fahrenheit").value;
    var celsiusTemp = fahrenheitToCelsius(temperature);
    
    var innerDiv = document.createElement('h2');
    innerDiv.className = 'answer-container';
    document.getElementById("outputTemperature").appendChild(innerDiv).innerHTML = celsiusTemp; // 3
    resetform()
 
}
