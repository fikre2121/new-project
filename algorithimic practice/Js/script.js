// alert("hi all");
// ##########################
// define a function that take an array
// check if the elements in the array are numbers,if not diplay error message
// check if the array is not empty
// return the first elemetn of the array

function getFirstValue(arr) {
  if (!Array.isArray(arr)) {
    return "enter a number please";
  } else if (arr.length == 0) {
    return "undfined";
  } else {
    return arr[3];
  }
}
console.log(getFirstValue([1, 3, 4, 5]));
console.log(getFirstValue(4));
console.log(getFirstValue([]));

// ##########################
// define a function that recieves an arguement .
// check if the input is a number ,and posetive interger
// multiply the number by 60
// return the value

function howManySeconds(hours) {
  if (isNaN(hours)) {
    return "please enter a number";
  } else if (hours < 0) {
    return "please enter a posetive integer";
  } else {
    let result = hours * 3600;
    return result;
  }
}
console.log(howManySeconds(4));

// the pseudo code part
// define a function that takes a paramatre
// check if the input is a valid number
// check if the number is less than or equal 0 or not
// return a value

function lessThanOrEqualToZero(num) {
  if (isNaN(num)) {
    return "please enter a valid number";
  }

  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(-5));

//the pseudo code part

// define a function that takes two parametre
// use the four operations
// check if the inputs are numbers
// if not return error message
// add, multiply, subsrract and divive the two numbers
//  return the result
let a = prompt("enter a first number");
let b = prompt("enter a second number");
let c = prompt("enter a operation(+,*,-./)");
function calculate(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return " give me only numbers ,please";
  } else {
    if (c == "+") {
      return a + b;
    } else if (c == "*") {
      return a * b;
    } else if (c == "-") {
      return a - b;
    } else if (c == "/") {
      if (b == 0) {
        return "can not divide by 0";
      }
      return a / b;
    } else {
      return "please enter a valid operation";
    }
  }
}
console.log(calculate(a, b));

// Add up the Numbers from a Single Number
// define a function that takes a parametre
// check if the input is a number
// check if the number is integer
// add up the numbers up to the input number
// return the value

function addUp(num) {
  if (isNaN(num) || typeof num !== "number" || num <= 0) {
    return "enter a valid number";
  } else {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
}
console.log(addUp(4));
console.log(addUp("abe"));
console.log(addUp(-4));

const myFifth = (arr) => {
  if (!Array.isArray(arr)) {
    return "enter an array";
  } else if (isNaN(arr[0]) || isNaN(arr[1])) {
    return "enter a number";
  } else {
    let c = parseFloat(arr[0]) + parseFloat(arr[1]);
    return c;
  } 
}

console.log(myFifth([0,1]));
console.log(myFifth(["4",5]));
console.log(myFifth(4,5)); 
console.log(myFifth("ab",5)); 
