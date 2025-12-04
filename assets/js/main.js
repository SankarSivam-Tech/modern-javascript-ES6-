// what is javascript?
// JavaScript is a programming language used to create dynamic and interactive content on websites. It allows developers to implement complex features such as animations, form validations, and interactive maps.

// example:
// in C language
// string name = "John";
// in JavaScript
// var name = "John"; (dynamically assign the data type)

// what is variable?
// used to store the data as temporary memory in computer

// how to declare variable in ES6?
// 1. var (ES5 - 2009)
// 2. let (ES6 - 2015)
// 3. const (ES6 - 2015)

// 1. var
var firstName = "John";
// var-keyword
// firstName-variable
//john-value
console.log(firstName); // John

//variable naming rules
// 1. cannot start with number
// var 1stName = "Jane"; // invalid

// 2. can start with letter, _ , $
var _name = "Alice"; // valid
var $name = "Bob"; // valid
console.log(_name); // Alice
console.log($name); // Bob

// 3. cannot use reserved keywords
// var var = "test"; // invalid

// 4. cannot contain spaces
// var first Name = "Charlie"; // invalid

// 5. case-sensitive
var age = 25;
var Age = 30;
console.log(age); // 25
console.log(Age); // 30

// 6. use camelCase for multi-word variables
var firstName = "David"; // valid
console.log(firstName); // David

// 7. meaningful names
var x = 10; // not meaningful
var userAge = 10; // meaningful
console.log(userAge); // 10

// data types in JavaScript
// 1. String
var city = "New York";
console.log(city); // New York
console.log(typeof city);

// 2. Number
var score = 95.5;
console.log(score); // 95.5

// 3. Boolean
var isPassed = true;
console.log(isPassed); // true

// 4. Undefined
var address;
console.log(address); // undefined

// 5. Null
var phoneNumber = null;
console.log(phoneNumber); // null

// 6. Object
var person = { name: "Eve", age: 28 };
console.log(person); // { name: 'Eve', age: 28 }

// 7. Array
var colors = ["red", "green", "blue"];
console.log(colors); // [ 'red', 'green', 'blue' ]

// reassigning variable
firstName = "Michael";
console.log(firstName); // Michael
age = 35;
console.log(age); // 35
isPassed = false;
console.log(isPassed); // false
address = "123 Main St";
console.log(address); // 123 Main St
phoneNumber = "555-1234";
console.log(phoneNumber); // 555-1234
person.age = 29;
console.log(person); // { name: 'Eve', age: 29 }
colors.push("yellow");
console.log(colors); // [ 'red', 'green', 'blue', 'yellow' ]
score = 98.0;
console.log(score); // 98

// Scopes:

// there are two scopes such as
//  Global Scope and
//   Local Scope(Function Scope and Block Scope)

// 1. Global Scope
var globalVar = "I am global";
function showGlobalVar() {
  console.log(globalVar); // I am global
}

showGlobalVar();

// 2. Function Scope
function functionScope() {
  var functionVar = "I am local to function";
  console.log(functionVar); // I am local to function
}

functionScope();
// console.log(functionVar); // Error: functionVar is not defined

// drawbacks of var
// 1. Function scoped
// 2. Can be redeclared
var globalVar = "I can be redeclared";
console.log(globalVar); // I can be redeclared
// 3. Hoisting
console.log(hoistedVar);
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // I am hoisted
// to overcome these drawbacks, ES6 introduced let and const

// example:
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5 (i is accessible here due to function scope of var)

// In the above example, the variable 'i' is accessible outside the for loop because 'var' is function-scoped. This can lead to unintended consequences if 'i' is used elsewhere in the code.

// Using 'let' instead of 'var' would limit the scope of 'i' to the for loop block, preventing such issues.

// Summary:
// In this code, we covered the basics of JavaScript variables using 'var', including naming rules, data types, reassignment, and scope. We also discussed the drawbacks of 'var' and hinted at the advantages of 'let' and 'const' introduced in ES6.

// Global Object
// browser (window)
// node (global)

// 2.Let

let lastName = "Smith"; // global scope

function changeName() {
  let lastName = "Johnson"; // local scope
  console.log(lastName); // Johnson
}

changeName();
console.log(lastName); // Smith

for (let j = 0; j < 3; j++) {
  console.log(j); // 0,1,2
}
// console.log(j); // Error: j is not defined

// 3. Const
const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable.
console.log(pi); // 3.14

let pI = 3.14;
pI = 3.14159;
console.log(pI); //3.14159

const personArray = ["Alice", "Bob"];
// personArray=["Charlie"]; // Error: Assignment to constant variable.
personArray.push("Charlie");
console.log(personArray); // ["Alice", "Bob", "Charlie"]
