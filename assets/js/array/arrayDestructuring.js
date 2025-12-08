// Basic Array Destructuring

// Method:1
const subjectMarks = [50, 70, 95];
console.log("physics", subjectMarks[0]); //physics 50
console.log("chemistry", subjectMarks[1]); //chemistry 70
console.log("maths", subjectMarks[2]); //maths 95

// Method:2
const subMarks = [65, 75, 85];

let botany = subMarks[0];
let zoology = subMarks[1];
let evs = subMarks[2];

console.log("botany", botany); //botany 65
console.log("zoology", zoology); //zoology 75
console.log("evs", evs); //evs 85

// Method:3
const [Tamil, English, Economy] = [80, 90, 100];

console.log("Tamil", Tamil); //Tamil 80
console.log("English", English); //English 90
console.log("Economy", Economy); //Economy 100

// Handling Undefined Elements
const [Tam, Eng, Economics] = [80, 90];

console.log(Tam, Eng, Economics); //80 90 undefined

//Skipping Elements
const [phy, , mat] = [75, 85, 95];

console.log(phy, mat); //75 95

// Discarding Extra Elements
const [bot, zoo] = [75, 85, 95];
console.log(bot, zoo); //75 85

// Default Values
const [myName] = ["Veera"];
console.log(myName); //Veera

const [myNames = "Sankar"] = [];
console.log(myNames); //Sankar

const [myNam = "Sankar"] = ["Veera"];
console.log(myNam); //Veera

// Rest Syntax
const [...nos] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nos); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [one, two, ...remNos] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(one, two, remNos); //1 2 (8) [3, 4, 5, 6, 7, 8, 9, 10]

// Swapping Variables
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b); //20 10

//Nesting Array Destructuring

// const [no1,no2,no3and4,no5,no6]=[1,2,[3,4],5,6]
// console.log(no1,no2,no3and4,no5,no6); //1 2 (2) [3, 4] 5 6

const [no1, no2, [no3, no4], no5, no6] = [1, 2, [3, 4], 5, 6];
console.log(no1, no2, no3, no4, no5, no6); //1 2 3 4 5 6

//Array Destructuring on Functions
function getFullName() {
  return ["Veera", "Sankar"];
}

const fullName = getFullName();
console.log(fullName); //['Veera', 'Sankar']

const [my1stName, my2ndName] = getFullName();
console.log(my1stName, my2ndName); //Veera Sankar

//On Loops
const myTeam = [
  ["Veera", "Sankar"],
  ["Hari", "Krishnan"],
];
console.log(myTeam); //[Array(2), Array(2)]

for (let team of myTeam) {
  console.log(team); // ['Veera', 'Sankar'] ['Hari', 'Krishnan']
}

for (let [firstName, lastName] of myTeam) {
  console.log(firstName, lastName); //Veera Sankar Hari Krishnan
}
