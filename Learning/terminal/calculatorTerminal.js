console.log("Welcome to the calculator terminal!");
let num1;
let num2;
let operation;

console.log("Please enter the first number:");
function getFirstNumber() {
    num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
        console.log("Invalid input. Please enter a valid number.");
        getFirstNumber();
    } else {
        console.log(`First number is: ${num1}`);
        getSecondNumber();
    }
}

console.log("Please enter the second number:");
function getSecondNumber() {
    num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
        console.log("Invalid input. Please enter a valid number.");
        getSecondNumber();
    } else {
        console.log(`Second number is: ${num2}`);
        chooseOperation();
    }
}
console.log("Please choose an operation: +, -, *, /");
function chooseOperation() {
    operation = prompt("Choose an operation: +, -, *, /");
    if (operation === "+" || operation === "-" || operation === "*" || operation === "/") {
        calculateResult();
    } else {
        console.log("Invalid operation. Please choose +, -, *, or /.");
        chooseOperation();
    }
}
function calculateResult() {
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
    }
    console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}