// Basic Array Destructuring

// Method:1
const subjectMarks = [50, 70, 95];
console.log("physics", subjectMarks[0]); //50
console.log("chemistry", subjectMarks[1]); //70
console.log("maths", subjectMarks[2]); //95

// Method:2
const subMarks = [65, 75, 85];

let botany = subMarks[0];
let zoology = subMarks[1];
let evs = subMarks[2];

console.log("botany", botany);
console.log("zoology", zoology);
console.log("evs", evs);

// Method:3
const [Tamil, English, Economy] = [80, 90, 100];

console.log("Tamil", Tamil);
console.log("English", English);
console.log("Economy", Economy);
