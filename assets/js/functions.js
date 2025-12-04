// what is  function?
// A function is a reusable block of code used to perform a task efficiently and avoid repeating code.

// simple task
// Task 1: Create a function with one parameter

function Welcome(userName) {
  console.log(`Welcome, ${userName}!`);
}

Welcome("Sankar");

// Task 2: Create a function that adds two numbers

function add(a, b) {
  return a + b;
}
console.log(add(15, 25));

// Task 3: Default parameter

function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
greet("Sankar");

// Task 4: Function with 3 parameters
function profile(name, age, country) {
  console.log(`Name: ${name}, Age: ${age}, Country:${country}`);
}
profile("Veera Sankar", 29, "India");

// Task 5: Use Rest Parameters (ES6)

function total(...numbers) {
  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 10);
  console.log(sum);
}
total(10, 20, 30);
total(1, 2, 3, 4, 5, 6);

// intermediate task
// Task 1: Arrow Function + Default Parameter

const multiply = (a, b = 1) => {
  return a * b;
};
console.log(multiply(5));
console.log(multiply(4, (b = 10)));

// Task 2: Return an Object from a Function
function CreateUser(name, age, country) {
  return {
    name,
    age,
    country,
  };
}
console.log(CreateUser("Sankar", 29, "India"));

// Task 3: Sum Only Even Numbers (Rest + Filter + Reduce)

const SumEven = (...numbers) => {
  const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
  });

  const result = evenNumbers.reduce((a, c) => {
    return a + c;
  }, 0);

  return result;
};

console.log(SumEven(1, 2, 3, 4, 5, 6));

// Task 4: Nested Functions (Function inside a Function)
// A function can return another function.

function outer() {
  function inner(name) {
    console.log(`Hello My Name is ${name}`);
  }
  return inner;
}

const Outer = outer();
Outer("Sankar");

// Task 5: Callback Function
function alarming() {
  console.log("Your time is come!");
}

function setAlarm(notifyUser) {
  console.log("alarm on 3.30PM");

  // After some time, call the callback
  alarming();
}

setAlarm(alarming);
