// alert("hello");
// function adder(a, b){

// }
const myName = () => "abu";
console.log(myName);
console.log("hello-world");
function add(a, b) {
  let c = a + b;
  console.log(c);
}
// arrow function
add(4, 5);
const sum = (a, b) => a + b;
console.log(sum(4, 4));
// ternary operator
score = 30;
pass = 25;
score >= pass ? console.log("pass") : console.log("fail");
//
function gradeStudents(score) {
  if (score >= 90) {
    console.log("a");
  }
  if (score >= 80 && score < 90) {
    console.log("b");
  }
}
gradeStudents(85);
// #########################
//template literals
let Name = "abu";
let Age = "23";
const greeting = `hello my name is $ {Name} and i am ${Age} year old `;
console.log(greeting);
// traditional way of writing
let name1 = "abu";
let age = "23";
const greeting2 = "hello my name is " + name1 + "and i am " + age + "years old";
console.log(greeting2);

// example_2 template literals

function greet(name) {
  return `hello,&{name}`;
}
const yo = greet("abu");
console.log(yo);
// ############
//how return works
function adder(a, b) {
  let sum = a + b;
  return sum;
}
console.log(adder(5, 8));

function ave(a, b) {
  let average = adder(a, b) / 2;
  return average;
}
console.log(ave(10, 30));

// #############################################
function add(n1, n2) {
  // console.log(n1 + n2);
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}
let summ = add(3, 5);
console.log(summ);
let product = multiply(prompt("enter a number"), summ);
console.log(product);

function Average(n1, n2) {
  return add(n1, n2) / 2;
}
let av = Average(4, 9);
console.log(av);

// ###################
function mySecond(x) {
  console.log(x);
}
mySecond("yo");

function myThird(x) {
  let c = mySecond(x);
  console.log(c);
}
myThird(6);

// array function
function myArray(num) {
  console.log(num[0]);
}
myArray(1, 2, 3, 4);
// or
function array() {
  let arr = [1, 3, 4, 5];
  console.log(arr[0]);
}
array();

// question5

function myFifth(num) {
  console.log(num[0] + num[1]);
}
myFifth([2, 4]);

function addition(num) {
  if (isNaN(num)) {
    return "enter a number only";
  } else {
    let a = num + 1;
    return a;
  }
}
console.log(addition(4));
console.log(addition("yo"));
console.log(addition(-3));

// this  is ....

const text = "Hello, welcome to JavaScript!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
