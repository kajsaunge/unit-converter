document.getElementById('getDegree').addEventListener('click', () => {
        showResult('fahrenheit');
        document.getElementById('fahrenheit').focus();
})

document.getElementById('getDl').addEventListener('click', () => {
    showResult('cups');
    document.getElementById('cups').focus();
})

function preventSubmitAndShowResult(calculationType) {
    const keyCode = window.event.keyCode || window.event.which;

    if (keyCode === 13) {
       showResult(calculationType);
       document.activeElement.focus();
       return false;
    }
}



function showResult(calculationType) {
    let elementValue;
    let calculatedResult;

        if (calculationType === 'fahrenheit') {
            elementValue = document.getElementById(calculationType).value;
            calculatedResult = fahrenheitToCelsius(elementValue);

            if (!elementValue) {
              return false;
            }  addsListItem('celsiusList', calculationType, elementValue, calculatedResult);
        }

        if (calculationType === 'cups') {
            elementValue = document.getElementById(calculationType).value;
            calculatedResult = cupsToDeciliter(elementValue);

            if (!elementValue) {
                return false;
            } addsListItem('deciliterList', calculationType, elementValue, calculatedResult);
        }

        resetForm(calculationType);
}


function fahrenheitToCelsius(temperature) {
    const fahrenheitDifferance = 32;
    const celsiusToFahrenheitModifier = 1.8;
    let celsiusTemperature = (temperature - fahrenheitDifferance) / celsiusToFahrenheitModifier;

    return `${Math.round(celsiusTemperature)} °C`;
}

function cupsToDeciliter(cups) {
    const deciliterModifier = 2.365882365;
    let deciliterAmount = cups * deciliterModifier;

    return `${deciliterAmount.toFixed(1)} dl`;
}

function addsListItem(listId, calculationType, elementValue, calculatedResult) {
    let list = document.getElementById(listId);
    let listItem = document.createElement('li');

    listItem.className = 'converted-list__item fade-in';
    listItem.appendChild(document.createTextNode(elementValue + (calculationType === 'fahrenheit'
        ? ' °F = '
        : ' cups = ') + calculatedResult));
    list.insertBefore(listItem, list.childNodes[0]);
}

function resetForm(calculationType) {
    calculationType === 'fahrenheit'
        ? document.getElementById('fahrenheitForm').reset()
        : document.getElementById('cupsForm').reset();
}
