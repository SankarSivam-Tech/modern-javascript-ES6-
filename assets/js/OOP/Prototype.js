const myPlace = {
  city: "New York",
  greet() {
    console.log(`Welcome to ${this.city}`);
  },
};
console.log(myPlace);

// {city: 'New York', greet: ƒ}
// city
// :
// "New York"
// greet
// :
// ƒ greet()
// [[Prototype]]
// :
// Object

console.log(Object.getPrototypeOf(myPlace));

console.log(myPlace.toString()); // [object Object]

const numArray = [1, 2, 3, 4, 5];
console.log(numArray);
console.log(Array.prototype);

const anObject = {
  toString() {
    return "iam the helper string";
  },
};
console.log(anObject.toString()); // iam the helper string

// summary:
// Behavior: Defines anObject with an own toString() that returns "iam the helper string", then logs anObject.toString() which prints that string.
// Why it matters: Shows that an object's own method overrides Object.prototype.toString — JavaScript finds the own property first on the prototype chain.

// Add our own method to Object prototype
Object.prototype.unCapitalize = function (string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

console.log(myPlace.unCapitalize("New York")); // new York

// summary:
// Behavior: Adds an unCapitalize method to Object.prototype that converts the first character of a string to lowercase, then demonstrates its use on the string "new York".
// Why it matters: Illustrates how modifying Object.prototype affects all objects, allowing custom methods to be available universally, but also highlights potential risks of prototype pollution.

// Task 1: Listing all Array prototype methods
const arrayMethods = Object.getOwnPropertyNames(Array.prototype);

for (let key of arrayMethods) {
  console.log(key);
}

//Task 2:Listing all Object prototype methods
const objectMethods = Object.getOwnPropertyNames(Object.prototype);

for (let key in objectMethods) {
  console.log(objectMethods[key]);
}


//Example:
const myDate=new Date()
console.log(myDate); //Fri Dec 19 2025 14:35:38 GMT+0530 (India Standard Time)
console.log(Object.getPrototypeOf(myDate));
console.log(myDate.getFullYear()); //2025
// summary:
// Behavior: Creates a new Date object representing the current date and time, logs it, retrieves and logs its prototype, and calls getFullYear() to get the current year.
// Why it matters: Demonstrates how built-in objects like Date have their own prototypes with useful methods, showcasing JavaScript's prototype-based inheritance.

