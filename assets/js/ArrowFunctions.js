// An arrow function is a shorter and modern way to write functions in JavaScript.
// It was introduced in ES6 (ECMAScript 2015).
// An arrow function is a compact syntax for writing functions using the => (arrow) operator.

// Types of Functions

// 1.Function declaration
function sayHello() {
  console.log("hello World"); //hello World
}
sayHello();

// 2.function expression
const greeting = function sayHello() {
  console.log("hello World"); //hello World
};
greeting();

// 3.Anonymous Function
const greets = function () {
  console.log("hello world");
};
greets();

// 4.Arrow Function
const arrowFn = () => {
  console.log("this is Arrow Function");
};
arrowFn();

// Arrow function with single argument
const square = (x) => x * x;

console.log(square(2)); //4

// Arrow function with multiple argument
const addNumbers = (a, b) => {
  return a * b;
};
console.log(addNumbers(4, 6)); //24

//Arrow function in objects
const personInfo = {
  id: "1",
  firstName: "Veera",
  lastName: "Sankar",
  //   getFullName() {
  //     return this.firstName + " " + this.lastName;
  //   },
  getFullName: () => {
    return personInfo.firstName + " " + personInfo.lastName;
  },
};
console.log(personInfo.getFullName()); //Veera Sankar

// Arrow Functions as Callback
const Numbers = [1, 2, 3, 4, 5, 6];
const squaredNumbers = Numbers.map((number) => {
  return number * number;
});
console.log(squaredNumbers); //[1, 4, 9, 16, 25, 36]

// Returning Object literals in Arrow functions
// Method:1
const mobileInfo = () => {
  return {
    id: 1,
    type: "touch screen",
    brand: "samsung",
    rate: "15000",
  };
};
console.log(mobileInfo()); //{id: 1, type: 'touch screen', brand: 'samsung', rate: '15000'}

// Method:2
const mobiLeInfo = () => ({
  id: 1,
  type: "touch screen",
  brand: "samsung",
  rate: "15000",
});

console.log(mobileInfo()); //{id: 1, type: 'touch screen', brand: 'samsung', rate: '15000'}
