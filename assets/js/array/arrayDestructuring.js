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
const[phy,,mat]=[75,85,95]

console.log(phy,mat); //75 95

// Discarding Extra Elements
const [bot,zoo]=[75,85,95]
console.log(bot,zoo); //75 85


