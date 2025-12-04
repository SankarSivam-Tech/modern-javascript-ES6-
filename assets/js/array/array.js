// Array

// It can store multiple values in single container and each value can be accessed using an index (position number).

// 1.Array Constructor

const hobbies = new Array("reading", "writing");
console.log(hobbies[0]);

// 2.Array literal syntax

const Items = [
  "mobile",
  "laptop",
  true,
  40,
  null,
  undefined,
  { id: 1, name: "mouse" },
  ["text", "numbers"],
];

console.log(Items[7]);

document.getElementById("result2").innerHTML = Items[2];

// loop items using for loop

for (let i = 0; i < Items.length; i++) {
  console.log("forloop:", Items[6].name);
}

// Multi dimensional Array

const matrix = [
  [11, 12, 13],
  [21, 22, 23],
  [[24, 25, 26], 32, 33],
];

console.log(matrix.flat());

const fruit = ["banana", "apple", "orange", "grapes"];

console.log(fruit.length); //4

fruit.forEach((fr) => {
  console.log(fr); //display one below one
});

console.log(fruit.toString()); //banana,apple,orange,grapes

// add items in end of an array
fruit.push("watermelon", "annachi", "seetha");
console.log(fruit);

// add items in start of array
fruit.unshift("lemon");
console.log(fruit);

// delete an item in end of array
fruit.pop();
console.log(fruit);

// delete an item in start of array
fruit.shift();
console.log(fruit);

// Slice an array
const myFruit = fruit.slice(2, 5);
console.log(myFruit);

// splice an array
fruit.splice(1, 2, "one", "two");
console.log(fruit);

// concat an multiple array into single array
const electronics=["phone","laptop"]
const indoorGames=["basketball","volleyball"]
const outdoorGames=["cricket","football"]

const singleArray=electronics.concat(indoorGames,outdoorGames,"chips")
console.log(singleArray);

const singleArraySpreadOperator=[...electronics,...indoorGames,...outdoorGames,"bat"]
console.log(singleArraySpreadOperator);



