// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);
// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(numA, numB){
  return numA + numB;
}

// - Write a Function Expression
const addOne = function add(numA, numB) {
  return numA + numB;
}

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
const addNumbers = (numA, numB) => {
  return numA + numB
}
// - Execute the function
addNumbers(2,4);
// - Execute the function and store the return value in a variable.
let sums = addNumbers(2,4);
// - What is the typeof returnValue
number


/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(numA, numB) {
  return numA - numB;
}
// - Write a Function Expression
const substractOne = function substract(numA, numB) {
  return numA - numB;
}

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
const squareNum = (number) => {
  return number * number;
}
// - Execute the function
squareNum(3);
// - Execute the function and store the return value in a variable.
let squareValue = squareNum(3);
// - What is the typeof returnValue
number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(numA, numB) {
  return numA + numB;
}
// - Write a Function Expression
const sum = function(numA, numB) {
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
const multiplayNumber = (numA, numB) => numA *numB;
// - Execute the function
multiplayNumber(3,5);
// - Execute the function and store the return value in a variable
let multipliedValue = multiplayNumber(3,5);

// - What is the typeof returnValue
number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(number) {
  return number * number;
}

// - Write a Function Expression

const square = function(number) {
  return number * number;
} 
// - Write an Arrow Function without curly brackets(if possible)
const square = (number) => number * number;

// - Write an Arrow Function with curly brackets
const square = (number) => {
  return number * number;
} 
// - Execute the function
square(number);
// - Execute the function and store the return value in a variable
let squaredNumber = square(number);
// - What is the typeof returnValue
number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}
// - Write a Function Expression
const isGreater = function(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
const additionNum = (a, b) => a + b;

// - Write an Arrow Function with curly brackets
const additionNumbers = (a, b) => {
  return a + b;
}
// - Execute the function
addNumbers(6, 7);
// - Execute the function and store the return value in a variable
let value = addNumbers(a + b);
// - What is the typeof returnValue
number
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  return num % 2 === 0 ? 'Even' : 'Odd'
}

// - Write an anonymous Function Expression
const oddOrEven = function (num) {
  return num % 2 === 0 ? 'Even' : 'Odd'
}
// - Write an named Function Expression
const oddOrEven = function check(num) {
  return num % 2 === 0 ? 'Even' : 'Odd'
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const oddOrEven = (num) => num % 2 === 0 ? 'Even' : 'Odd';

let results = oddOrEven(7);
// - Write an Arrow Function with curly brackets
const oddOrEven = (num) => {
  return num % 2 === 0 ? 'Even' : 'Odd'
}
// - Execute the function
oddOrEven(7);
// - Execute the function and store the return value in a variable
let result = oddOrEven(7);
// - What is the typeof returnValue
String;