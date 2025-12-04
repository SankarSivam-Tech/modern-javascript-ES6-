// for loop
// The for loop repeats code a specific number of times.
// You control start, end, and step.

// syntax:

// for(instruction;condition;step){
//     console.log();

// }

// example:

for (let i = 0; i < 10; i++) {
  // getting odd numbers
  if (i % 2 !== 0) {
    console.log("Number:", i);
  }
}

// for-in loop

// syntax

// for (let key in obj / arr) {
//   console.log();
// }

// key->variable name

// example 1:
// for…in is used to loop through the keys/properties of an object.
// Loops through object keys.

const test = {
  name: "sankar",
  age: 29,
};

for (let key in test) {
  console.log(key + ":", test[key]); //key ->index
}

// example 2:
// Loops through array values.

const test2 = ["red", "green", "blue"];

for (let key in test2) {
  console.log(test2[key]);
}

// for-of loop
// for…of is used to loop through values of an array, string, map, set, etc.
// Loops through array values.

// syntax:
// for (let name of names) {
//   console.log();
// }

// example:
for (let test of test2) {
  console.log("Test:", test);
}

// Level 1 Tasks
// Task 1 — for Loop
// Print numbers 1 to 10.

for (let y = 1; y <= 10; y++) {
  console.log(y);
}

// Task 2 — for…in Loop
// Given:
const car = {
  brand: "Honda",
  model: "City",
  year: 2020,
};

for (let key in car) {
  console.log(key, car[key]);
}

// Task 3 — for…of Loop
// Given:
const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Task 4:Bonus Task
// Loop through the string "Javascript" and print each character using for…of.

for (let char of "Javascript") {
  console.log(char);
}

// Level 2 Tasks
// Task 1: Sum of Numbers (for loop)
// Print the sum of numbers from 1 to 20.

let sum = 0;

for (let z = 1; z <= 20; z++) {
  sum += z;
}
console.log(sum);

// Task 2: Count Even & Odd Numbers (for loop)
// Given an array:
const numbers = [10, 15, 22, 33, 40, 55];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even Numbers:", evenCount);
console.log("Odd Numbers:", oddCount);

// Task 3: Print All Keys Only (for…in)
// Given:

const laptop = {
  brand: "Dell",
  ram: "16GB",
  processor: "i7",
  storage: "512GB SSD",
};

for (let key in laptop) {
  console.log(key);
}

// Task 4: Print Values Only (for…in)

// Print only the values:

for (let key in laptop) {
  console.log(laptop[key]);
}

// Task 5: Find the Longest Word (for…of)
// Given:

const words = ["apple", "watermelon", "kiwi", "banana"];

let longestWord = "";

for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
console.log(longestWord);

// explanation:
// start
longestWord = "";
length = 0;

// Loop 1: word = "apple"
// word.length = 5
// longestWord.length = 0

// Is 5 > 0 ? YES
// → longestWord = "apple"

// Loop 2: word = "watermelon"
// word.length = 10
// longestWord.length = 5

// Is 10 > 5 ? YES
// → longestWord = "watermelon"

// Loop 3: word = "kiwi"
// word.length = 4
// longestWord.length = 10

// Is 4 > 10 ? NO
// → do nothing

// Loop 4: word = "banana"
// word.length = 6
// longestWord.length = 10

// Is 6 > 10 ? NO
// → do nothing

// Task 6: Reverse a String (for…of)
// Reverse the string "Javascript" using for…of.

// Task 6: Reverse a String (for…of)
// Reverse the string "Javascript" using for…of.

const text = "Javascript";
let reversed = "";

for (let char of text) {
  reversed = char + reversed;
}
console.log(reversed);

// Task 7: Sum All Prices Using for…in

//  Given Object
const items = {
  pen: 10,
  book: 50,
  bag: 800,
};

let totalPrice = 0;

for (let key in items) {
  totalPrice += items[key];
}

console.log(totalPrice);

// Task 8: Loop Through Nested Array

const data = [
  ["HTML", "CSS"],
  ["JS", "React"],
  ["Node", "MongoDB"],
];

for (let innerArray of data) {
  for (let value of innerArray) {
    console.log(value);
  }
}

const subjects = ["phy", "che", "eng", "mat"];

// for (let a = 0; a < subjects.length; a++) {
//   console.log(subjects[a]);
//   document.getElementById("result3").innerHTML += subjects[a] + "<br/>";
// }

// for (let key in subjects) {
//   document.getElementById("result3").innerHTML += subjects[key] + "<br/>";
// }

// for (let sub of subjects) {
//   document.getElementById("result3").innerHTML += sub + "<br/>";
// }

function displaySubjects() {
  document.getElementById("result3").innerHTML = "";
  for (let sub of subjects) {
    document.getElementById("result3").innerHTML += sub + "<br/>";
  }
}

// displaySubjects();
