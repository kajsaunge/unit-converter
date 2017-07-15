var fahrenheitDifferance = 32;
var celsiusTemp = "";
var deciliterAmount = "";

// Remember, this is how
// document.addEventListener('DOMContentLoaded', function(){
// });

function preventSubmitAndShowResult() {
    var keyCode = window.event.keyCode || window.event.which;
    if (keyCode === 13) {
       showResult();
       document.activeElement.blur();
       return false;
    }
}

//TODO refactor to the above
function preventSubmitAndShowResultCups() {
    var keyCode = window.event.keyCode || window.event.which;
    if (keyCode === 13) {
       showDeciliterCalculation();
       document.activeElement.blur();
       return false;
    }
}

function clearBox(elementClass)
{
    document.getElementsByClassName(elementClass).innerHTML = "";
}

function fahrenheitToCelsius(temperature) {
    var celsiusTemp = (temperature - fahrenheitDifferance) / 1.8;
    return Math.round(celsiusTemp) + "°C";
}
function cupsToDeciliter(cups) {
    var deciliterAmount = cups * 2.365882365;
    return deciliterAmount.toFixed(1) + " dl";
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
    
    var li = document.createElement('li');
    li.className = 'unordered-list-item answer fade-in';
    li.appendChild(document.createTextNode(temperature + ' °F = ' + celsiusTemp));

    var list = document.getElementById('outputTemperature');
    list.insertBefore(li, list.childNodes[0]);
    resetform();
}


//TODO refactor to the above
function showDeciliterCalculation() {
    var cups = document.getElementById("cups").value;
    var deciliterAmount = cupsToDeciliter(cups);
    
    var li = document.createElement('li');
    li.className = 'unordered-list-item answer fade-in';
    li.appendChild(document.createTextNode(cups + ' cups = ' + deciliterAmount));
    
    var list = document.getElementById("outputAmountDl");
    list.insertBefore(li, list.childNodes[0]);
    resetCupsForm();
}


