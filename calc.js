
let num1;
let num2;
let operator;

function operate(num1, operator, num2) {
    if (operator == "+") {
        add(num1, num2);
    } else if (operator == "-") {
        subtract(num1, num2); 
    } else if (operator == "*") {
        multiply(num2, num2);
    } else if (operator == "/") {
        divide(num1, num2)
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