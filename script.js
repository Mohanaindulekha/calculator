document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");

    let currentInput = "";
    let currentOperator = "";
    let previousInput = "";

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.textContent;
            display.value = currentInput;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentInput !== "") {
                if (currentOperator !== "") {
                    calculate();
                }
                currentOperator = button.textContent;
                previousInput = currentInput;
                currentInput = "";
            }
        });
    });

    clearButton.addEventListener("click", () => {
        clear();
    });

    calculateButton.addEventListener("click", () => {
        calculate();
    });

    function clear() {
        currentInput = "";
        currentOperator = "";
        previousInput = "";
        display.value = "";
    }

    function calculate() {
        if (previousInput !== "" && currentInput !== "" && currentOperator !== "") {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);

            switch (currentOperator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    currentInput = (num1 / num2).toString();
                    break;
            }

            display.value = currentInput;
            previousInput = "";
            currentOperator = "";
        }
    }
});
