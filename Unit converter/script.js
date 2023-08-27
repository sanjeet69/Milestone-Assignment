document.getElementById('convertLength').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('lengthValue').value);
    const fromUnit = document.getElementById('lengthFrom').value;
    const toUnit =  document.getElementById('lengthTo').value;

    if(!isNaN(value)) {
        const convertedValue = convertLength(value,fromUnit,toUnit);
        document.getElementById('lengthResult').textContent = `${value} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}.`;

    } else {
        document.getElementById('lengthResult'). textContent = 'Please enter a valid number.';
    }
});

function convertLength(value, fromUnit, toUnit) {
    const conversionTable = {
        meter: {
            foot: 3.28084,
            inch: 39.3701
    
        },
        foot: {
            meter:0.3048,
            inch: 12
        },
        inch: {
            meter: 0.0254,
            foot: 0.0833333
        }
    };
    return value * conversionTable[fromUnit][toUnit];
}