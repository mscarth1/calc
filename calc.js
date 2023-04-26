const display = document.querySelector("#display");
const operators = document.querySelector('.operators')
const action = operators.dataset.action

let operator = '';
let currentNumber = '';
let previousNumber = '';
let result = '';
let clearDisplay = false;

function operate(currentNumber, previousNumber, operator) {
    
    if (operator === "+") {
        result = parseFloat(currentNumber) + parseFloat(previousNumber);
    } else if (operator === "-") {
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
    } else if (operator === "*") {
        result = parseFloat(currentNumber) * parseFloat(previousNumber);
    } else if (operator === "/") {
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
    }
    display.textContent = result;
}

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
      if (action && operator === '') {
        previousNumber = display.textContent;
        operator = e.target.value;
        clearDisplay = true;
    } else if (action && operator !== '') {
        operator = e.target.value;
        previousNumber = result;
            
    }
});



btnsClear.addEventListener("click", e => {
    
        operate(currentNumber, previousNumber, operator);
        clearDisplay = true;
        

    console.log(currentNumber);
    console.log(previousNumber);
    console.log(operator);

})