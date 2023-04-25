
let operator = '';
let currentNumber = '';
let previousNumber = '';
let result = '';

let tempNumber = '';

let clearDisplay = false;

function operate(currentNumber, previousNumber, operator) {
    
    if (operator === "+") {
        return parseFloat(currentNumber) + parseFloat(previousNumber);
    } else if (operator === "-") {
        return parseFloat(currentNumber) - parseFloat(previousNumber);
    } else if (operator === "*") {
        return parseFloat(currentNumber) * parseFloat(previousNumber);
    } else if (operator === "/") {
        return parseFloat(currentNumber) / parseFloat(previousNumber);
    }
}

function add(...arguments) {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function subtract(num1, ...arguments) {
    for (i = 0; i < arguments.length; i++) {
        num1 -= arguments[i];
    }
    return num1;
}

function multiply(...arguments) {
    let sum = 1;
    for (i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
}

function divide(num1, ...arguments) {
    for (i = 0; i < arguments.length; i++) {
        num1 /= arguments[i];
    }
    return num1;
}

const display = document.querySelector("#display");



btnsNumbers.addEventListener("click", e => {
    if (display ==='0' || clearDisplay === true) {
        currentNumber = e.target.value;
        display.textContent = currentNumber;
        clearDisplay = false;
    } else {
        display.textContent = currentNumber += e.target.value;
    }
});




const operators = document.querySelector('.operators')
const action = operators.dataset.action

btnsOperators.addEventListener("click", e => {
      if (action) {
        previousNumber = display.textContent;
        clearDisplay = true;
      } else if (operator === '=') {
        
      }
});


