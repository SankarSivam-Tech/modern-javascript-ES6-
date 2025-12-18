// What is OOP in JavaScript?
// Object-Oriented Programming (OOP) is a way of writing code where we model real-world things using objects.

// Example:
// Car → object
// Properties → color, model, speed
// Methods → start(), stop(), drive()

// What is a Constructor Function?
// A constructor function is a regular function used to create multiple similar objects.
// 🔑 Key rules:
// Function name starts with a capital letter (convention)
// Used with the new keyword
// Uses this to assign properties

// Why Do We Need Constructor Functions?

// Without a constructor:
// const user1 = {
//   name: "Sankar",
//   age: 25
// };

// const user2 = {
//   name: "Ravi",
//   age: 28
// };
// 👉 Code repetition ❌

// With constructor:
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const user1 = new User("Sankar", 25);
// const user2 = new User("Ravi", 28);
// 👉 Clean, reusable, scalable ✅

// Example of a Constructor Function
function Car(color, model) {
  this.color = color;
  this.model = model;
}
Car.prototype.start = function () {
  console.log(this.model + " " + this.color + " car started");
};

const car1 = new Car("red", "2020");
const car2 = new Car("blue", "2021");
car1.start(); //2020 red car started
car2.start(); //2021 blue car started

// Summary:
// Constructor functions help create multiple similar objects easily.
// They use this to set properties and can have methods via prototypes.
// This makes code cleaner and more efficient.

