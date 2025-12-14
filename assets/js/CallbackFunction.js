// What is a Callback Function?
// A callback function is a function that is passed as an argument to another function and is executed later.
// In simple words:
// “I’ll call you back when my work is done.”

// Example 1:
function Greet(myName, callBack) {
  console.log("my name is", myName);
  callBack();
}

function sayBye() {
  console.log("GoodBye");
}

Greet("Veera Sankar", sayBye);

// Example 2:
function orderingFood(food, callback) {
  console.log("preparing", food);
  setTimeout(callback, 2000);
}

function foodReady() {
  console.log("Food Ready");
}
orderingFood("Biriyani", foodReady);
