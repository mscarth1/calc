
let firstNum = '';
let secondNum = '';
let operator = '';
var displayVal = '';


function operate(num1, num2, operator) {
    
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
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

numberBtns.addEventListener("click", updateNum);

function updateNum (e) {
    displayVal = e.target.value;
    document.getElementById("display").textContent = displayVal;
}

operations.addEventListener("click", updateOperator);

function updateOperator (e) {
    displayVal = e.target.value;
    document.getElementById("display").textContent = displayVal;
}

// const addition = document.querySelector(".add")

// add.addEventListener('onclick', operate);

// let numberEntry = document.querySelectorAll('.numbers')

