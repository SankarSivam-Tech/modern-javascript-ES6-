// array.forEach()
// forEach is an array method used to loop through every element in an array.

// Key Points:
// forEach ➝ run a function on each element
// It does NOT return a new array.
// It is used only for performing actions, like printing, updating variables, logging, pushing to another array, etc.

const movies = [
  { title: "Leo", rating: 8.5 },
  { title: "Jailer", rating: 7.9 },
  { title: "Vikram", rating: 9.0 },
];

movies.forEach((movie) => {
  console.log(movie);
});

// arary.map()
// map is used to transform each element of an array and create a new array with modified values.

// Key Points:
// It returns a NEW array.
// It does not change the original array.
// Used when you want to transform data.

const mixedData = ["john", 25, true];

const newData = mixedData.map((mix) => {
  if (typeof mix === "number") {
    return mix * 2;
  }
  return mix;
});

console.log(newData);

// array.at()
// at() is an array method that allows you to access elements using positive AND negative index values

// ✔️ Positive index

// Starts from 0 → left to right
// Example: arr.at(0) → first item

// ✔️ Negative index

// Starts from -1 → right to left
// Example: arr.at(-1) → last item

const passengers = ["Ravi", "Sita", "Kumar"];

// earlier method
const getLastOne = passengers[passengers.length - 1];
console.log(getLastOne);

// using at() method
const getLast = passengers.at(-1);
console.log(getLast);

// copyWithin()
// copyWithin() is a JavaScript array method that copies a portion of the same array to another position in the same array, without changing the array’s length.

// syntax:
// array.copyWithin(target, start, end);

// Parameters:
// target → Index where copying should start.
// start → Index from where to begin copying.
// end (optional) → Index before which to stop copying.

const arr = [10, 12, 14, 16, 18];
console.log(arr.copyWithin(0, 1, 3)); //  [12, 14, 14, 16, 18]

const temps = [25, 28, 31, 34, 37];
console.log(temps.copyWithin(0, 2)); // [31, 34, 37, 34, 37]

//entries()
// entries() is an array method that returns a new Array Iterator object containing key/value pairs (index + element) for each item in the array.

// syntax:
// array.entries();

// An iterator like:
// [0, value1]
// [1, value2]
// [2, value3]

// Note:
// It doesn’t change the original array.

console.log(arr.entries());

// since it is an iterator, we need a loop to see the values.

const tasks = ["Login page", "Dashboard", "API Integration"];

for (let task of tasks.entries()) {
  console.log(task);
}

for (let [i, task] of tasks.entries()) {
  console.log(`${i + 1}.${task}`);
}

//values()
// values() is an array method that returns a new Array Iterator that contains only the values (elements) of the array — without indexes.

// Syntax
// array.values();

// Note:
// It doesn’t change the original array.

const products = ["Laptop", "Phone", "Tablet"];

for (let p of products.values()) {
  console.log(p);
}

// keys()
// keys() is an array method that returns a new Array Iterator containing only the indexes (keys) of the array.

// Syntax
// array.keys();

// The original array does NOT change.

const marks = [45, 78, 92];

for (let mark of marks.keys()) {
  console.log(mark);
}

// Difference Between keys(), values(), and entries()
// Method    	Returns
// keys()	    Only indexes
// values()	  Only values
// entries()	Index + value pairs

//every()
// every() is an array method that checks whether ALL elements in an array pass a test (a condition) written in a callback function.

//  If every item satisfies the condition → returns true
//  If any one item does NOT satisfy → returns false

const citizens = [18, 20, 25, 26];
const adults = citizens.every((citizen) => {
  return citizen >= 18;
});
console.log(adults); //true

const quantities = [1, 2, 4, 3];
const valid = quantities.every((q) => {
  return q >= 2;
});

console.log(valid); //false

// fill()
// fill() fills all or some elements of an array with a static value.

// Syntax
// array.fill(value, startIndex, endIndex);

// value → what to fill
// startIndex (optional) → where to start filling
// endIndex (optional) → where to stop filling (NOT included)

//  It MODIFIES the original array (important!)
//  Returns the modified array

const scores = [90, 85, 70, 60];
scores.fill(0);
console.log(scores); // [0, 0, 0, 0]

const loading = new Array(3).fill("loading...");
console.log(loading); // ['loading...', 'loading...', 'loading...']

const prices = new Array(5).fill(50, 2, 4);
console.log(prices); // [empty × 2, 50, 50, empty]

// filter()
// filter() is a JavaScript array method used to create a new array that contains only the elements that pass a test (a condition).
//  It does NOT change the original array
//  It returns a NEW array
//  The test function must return true or false

const cities = ["Delhi", "Mumbai", "Chennai", "Hyderabad", "Mysuru"];

const search = cities.filter((city) => {
  return city.includes("M");
});
console.log(search); //['Mumbai', 'Mysuru']

// find()
// find() is a JavaScript array method that returns the first element that satisfies a condition.

//  It returns only ONE value
//  It returns the FIRST matching value
//  If no match is found → it returns undefined
//  It does not change the original array

const productsLists = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Mouse" },
  { id: 103, name: "Keyboard" },
];

const findProduct = productsLists.find((list) => {
  return list.id === 103;
});
console.log(findProduct);

// Difference Between filter() and find()
// Feature	   filter()	                     find()
// Output	     Array (many results)	         Single value
// Returns	   All matching items	           First matching item
// Use case	   Multiple results needed	     Only one result needed

// findLast()
const agedPerson = [50, 60, 80, 75];

const findPerson = agedPerson.findLast((person) => {
  return person >= 70;
});
console.log(findPerson); //75

//findIndex()
const index = [10, 20, 30, 40, 50, 60, 70];
const findNumberIndex = index.findIndex((i) => {
  return i > 35;
});
console.log(findNumberIndex); //3

// findLastIndex()
const indexes = [10, 20, 30, 40, 50, 60, 70];
const findLastNumberIndex = indexes.findLastIndex((i) => {
  return i < 40;
});
console.log(findLastNumberIndex); //2

// flat()
// flat() is a JavaScript array method used to remove nested arrays
// and convert them into a single-level array.

//  It "flattens" nested arrays
//  It returns a new array
//  Original array remains unchanged
//  You can choose how many levels to flatten

//  Syntax
// array.flat(depth);

// depth → number of levels to flatten
// Default = 1
// You can use any number
// Use Infinity to flatten all levels

// Flatten one level (default)
const array = [1, 2, [3, 4]];
const result = array.flat();
console.log(result); //[1, 2, 3, 4]

// Flatten deeper nested arrays
const array2 = [1, [2, [3, [4]]]];
const result2 = array2.flat(2);
console.log(result2); // [1, 2, 3, Array(1)]

const result3 = array2.flat(3);
console.log(result3); //[1, 2, 3, 4]

// Flatten all levels
const array3 = [1, [2, [3, [4]]]];
const result4 = array3.flat(Infinity);
console.log(result4); // [1, 2, 3, 4]

// flatMap()
// flatMap() is a combination of map() + flat() (with depth = 1).

// Why use flatMap()?
// Because sometimes map() creates nested arrays, and you need to flatten them.

// Using map() (problem: nested array)
const num = [1, 2, 3];
const mapped = num.map((n) => [n, n * 2]);
console.log(mapped); //[[1, 2], [2, 4], [3, 6]]

// Using flatMap() (solution: flat array)
const numb = [1, 2, 3];
const flattened = numb.flatMap((n) => [n, n * 2]);
console.log(flattened);  //[1, 2, 2, 4, 3, 6]
