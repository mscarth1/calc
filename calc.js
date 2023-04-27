const display = document.querySelector("#display");
const operators = document.querySelector('.operators')
const action = operators.dataset.action

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


btnsClear.addEventListener("click", e => {
        if (firstOperator !== '' && secondOperator === '') {
        operate(previousNumber, currentNumber, firstOperator);
        clearDisplay = true;
        } else if (firstOperator !== '' && secondOperator !== '') {
            operate(previousNumber, currentNumber, secondOperator)
        }

    console.log(currentNumber);
    console.log(previousNumber);
    console.log(firstOperator);
    console.log(secondOperator);
    console.log(result);

})




// btnsOperators.addEventListener("click", e => {
//     if (firstOperator !== '' && secondOperator === '') { 
//       secondOperator = e.target.value;
//       operate(previousNumber, currentNumber, firstOperator); 
//       clearDisplay = true;
//   } else if (firstOperator !== '' && secondOperator !== '') { 
//       display.textContent = result;
//       operate(result, currentNumber, secondOperator);
//       clearDisplay = true;   
//   } else {
//       firstOperator = e.target.value;
//       previousNumber = display.textContent;
//       clearDisplay = true;
//   }
// });