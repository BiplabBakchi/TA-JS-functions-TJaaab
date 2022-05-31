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
function addOne(n){
  return n + 1;
}

// - Write a Function Expression
let addOne = function (n) {
  return n + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n + 1;


// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return n + 1;
}
// - Execute the function
addOne();
// - Execute the function and store the return value in a variable.
let num = addOne();
// - What is the typeof returnValue
number


/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(numA) {
  return numA - 1;
}
// - Write a Function Expression
let substractOne = function (numA) {
  return numA - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (numA) => numA - 1;

// - Write an Arrow Function with curly brackets
let substractOne = (numA) => {
  return numA - 1;
}
// - Execute the function
substractOne();
// - Execute the function and store the return value in a variable.
let Subtracts = substractOne();
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
let sum = function(numA, numB) {
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum = (numA, numB) =>{
  return numA + numB;
} 
// - Execute the function
sum();
// - Execute the function and store the return value in a variable
let finalValue = sum();

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

let square = function(number) {
  return number * number;
} 
// - Write an Arrow Function without curly brackets(if possible)
let square = (number) => number * number;

// - Write an Arrow Function with curly brackets
let square = (number) => {
  return number * number;
} 
// - Execute the function
square();
// - Execute the function and store the return value in a variable
let squaredNumber = square();
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
let isGreater = function(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => x > y ? `${x} is greater`: `${y} is greater`

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}
// - Execute the function
isGreater();
// - Execute the function and store the return value in a variable
let greaterNumber = isGreater();
// - What is the typeof returnValue
string
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
let oddOrEven = function (num) {
  return num % 2 === 0 ? 'Even' : 'Odd'
}
// - Write an named Function Expression
let oddOrEven = function oddOrEven(num) {
  return num % 2 === 0 ? 'Even' : 'Odd'
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (num) => num % 2 === 0 ? 'Even' : 'Odd';
// - Write an Arrow Function with curly brackets
const oddOrEven = (num) => {
  return num % 2 === 0 ? 'Even' : 'Odd'
}
// - Execute the function
oddOrEven();
// - Execute the function and store the return value in a variable
let results = oddOrEven();
// - What is the typeof returnValue
String;