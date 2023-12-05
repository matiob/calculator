let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue); // ejecuta un string como código javaScript
        if (!Number.isFinite(result) || isNaN(result)) {
            throw new Error('Resultado no valido');
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        alert('Error al realizar el calculo: ' + error.message);
        clearDisplay();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.dataset.value;
            const action = button.dataset.action;

            if (value !== undefined) {
                appendToDisplay(value);
            } else if (action !== undefined) {
                if (action === 'clear') {
                    clearDisplay();
                }
                if (action === 'calculate') {
                    calculateResult();
                }
            };
        });
    });
});
