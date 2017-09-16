'use strict';

document.getElementById('getDegree').addEventListener('click', function () {
    showResult('fahrenheit');
    document.getElementById('fahrenheit').focus();
});

document.getElementById('getDl').addEventListener('click', function () {
    showResult('cups');
    document.getElementById('cups').focus();
});

function preventSubmitAndShowResult(calculationType) {
    var keyCode = window.event.keyCode || window.event.which;

    if (keyCode === 13) {
        showResult(calculationType);
        document.activeElement.focus();
        return false;
    }
}

function showResult(calculationType) {
    var elementValue = void 0;
    var calculatedResult = void 0;

    if (calculationType === 'fahrenheit') {
        elementValue = document.getElementById(calculationType).value;
        calculatedResult = fahrenheitToCelsius(elementValue);

        if (!elementValue) {
            return false;
        }addsListItem('celsiusList', calculationType, elementValue, calculatedResult);
    }

    if (calculationType === 'cups') {
        elementValue = document.getElementById(calculationType).value;
        calculatedResult = cupsToDeciliter(elementValue);

        if (!elementValue) {
            return false;
        }addsListItem('deciliterList', calculationType, elementValue, calculatedResult);
    }

    resetForm(calculationType);
}

function fahrenheitToCelsius(temperature) {
    var fahrenheitDifferance = 32;
    var celsiusToFahrenheitModifier = 1.8;
    var celsiusTemperature = (temperature - fahrenheitDifferance) / celsiusToFahrenheitModifier;

    return Math.round(celsiusTemperature) + ' \xB0C';
}

function cupsToDeciliter(cups) {
    var deciliterModifier = 2.365882365;
    var deciliterAmount = cups * deciliterModifier;

    return deciliterAmount.toFixed(1) + ' dl';
}

function addsListItem(listId, calculationType, elementValue, calculatedResult) {
    var list = document.getElementById(listId);
    var listItem = document.createElement('li');

    listItem.className = 'converted-list__item fade-in';
    listItem.appendChild(document.createTextNode(elementValue + (calculationType === 'fahrenheit' ? ' °F = ' : ' cups = ') + calculatedResult));
    list.insertBefore(listItem, list.childNodes[0]);
}

function resetForm(calculationType) {
    calculationType === 'fahrenheit' ? document.getElementById('fahrenheitForm').reset() : document.getElementById('cupsForm').reset();
}