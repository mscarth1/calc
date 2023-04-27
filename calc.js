const display = document.querySelector("#display");

let firstOperator = '';
let secondOperator = '';
let currentNumber = '';
let previousNumber = '';
let result = '';
let clearDisplay = false;

function operate(currentNumber, previousNumber, operator) {
        if (operator === "+") {
            result = parseFloat(currentNumber) + parseFloat(previousNumber);
        } else if (operator === "-") {
            result = parseFloat(currentNumber) - parseFloat(previousNumber);
        } else if (operator === "*") {
            result = parseFloat(currentNumber) * parseFloat(previousNumber);
        } else if (operator === "/") {
            result = parseFloat(currentNumber) / parseFloat(previousNumber);
        } 
    display.textContent = Math.round((result + Number.EPSILON) * 100) / 100;
}

btnsNumbers.addEventListener("click", e => {
    if (display ==='0' || clearDisplay === true) {
        currentNumber = e.target.value;
        display.textContent = currentNumber;
        clearDisplay = false;
    } else {
        display.textContent = currentNumber += e.target.value;
    }
});

btnsOperators.addEventListener("click", e => {
      if (firstOperator !== '' && secondOperator === '') { 
        operate(previousNumber, currentNumber, firstOperator);
        previousNumber = result;
        secondOperator = e.target.value;
        clearDisplay = true;
    } else if (firstOperator !== '' && secondOperator !== '') { 
        display.textContent = result;
        operate(previousNumber, currentNumber, secondOperator);
        previousNumber = result;
        secondOperator = e.target.value;
        clearDisplay = true;   
    } else {
        firstOperator = e.target.value;
        previousNumber = display.textContent;
        clearDisplay = true;
    }
});

btnEquals.addEventListener("click", e => {
        if (firstOperator !== '' && secondOperator === '') {
        operate(previousNumber, currentNumber, firstOperator);
        clearDisplay = true;
        } else if (firstOperator !== '' && secondOperator !== '') {
            operate(previousNumber, currentNumber, secondOperator)
        }
})

btnClear.addEventListener("click", e => {
    firstOperator = '';
    secondOperator = '';
    currentNumber = '';
    previousNumber = '';
    result = '';
    display.textContent = 0;
})

btnDelete.addEventListener("click", e => {
    display.textContent = display.textContent.slice(0, -1);
    currentNumber = display.textContent;
})



// function add(...arguments) {
//     let sum = 0;
//     for (i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// function subtract(num1, ...arguments) {
//     for (i = 0; i < arguments.length; i++) {
//         num1 -= arguments[i];
//     }
//     return num1;
// }

// function multiply(...arguments) {
//     let sum = 1;
//     for (i = 0; i < arguments.length; i++) {
//         sum *= arguments[i];
//     }
//     return sum;
// }

// function divide(num1, ...arguments) {
//     for (i = 0; i < arguments.length; i++) {
//         num1 /= arguments[i];
//     }
//     return num1;
// }
