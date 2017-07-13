var constant = 32;
var celsiusTemp = "";
var deciliterAmount = "";


function clearBox(elementClass)
{
    document.getElementsByClassName(elementClass).innerHTML = "";
}

function fahrenheitToCelsius(temperature) {
    var celsiusTemp = (temperature - constant) / 1.8;
    return Math.round(celsiusTemp) + "°C";
}
function cupsToDeciliter(cups) {
    var deciliterAmount = cups * 2.365882365;
    return Math.round(deciliterAmount) + "dl";
}   

function resetform() {
    document.getElementById("fahrenheitForm").reset();
}
function resetCupsForm() {
    document.getElementById("cupsForm").reset();
}


function showResult() {
    var temperature = document.getElementById("fahrenheit").value;
    var celsiusTemp = fahrenheitToCelsius(temperature);
    
    var innerDiv = document.createElement('h2');
    innerDiv.className = 'answer-container';
    document.getElementById("outputTemperature").appendChild(innerDiv).innerHTML = celsiusTemp; // 3
    resetform()
}



function showDeciliterCalculation() {
    // innerDiv.remove();
    // document.getElementById("outputAmountDl").remove();
    
    var cups = document.getElementById("cups").value;
    var deciliterAmount = cupsToDeciliter(cups);
    
    var innerDiv = document.createElement('h2');

    innerDiv.className = 'answer-container';
    var hej = document.getElementById("outputAmountDl").appendChild(innerDiv).innerHTML = deciliterAmount; // 3
    resetCupsForm();   
    clearBox('answer-container'); 
}


