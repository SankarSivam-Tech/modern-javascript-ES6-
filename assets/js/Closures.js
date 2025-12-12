// A closure is created when:
// A function is inside another function, and
// The inner function remembers and accesses the outer function’s variables,
// Even after the outer function has finished running.

// Example 1: Teacher Assigning Homework

// Teacher → gives a homework number
// Student → remembers the homework number

function giveHomeWork(mYHomeworkNo) {
  const student = () => {
    console.log("My Homework No is", mYHomeworkNo);
  };
  return student;
}
const S1 = giveHomeWork(12);

S1();

// Example:2
function createtimer() {
  let count = 5;

  const start = () => {
    count++;
    console.log("counter", count);
  };
  return start;
}
const timer = createtimer();
timer(); // counter 6
timer(); //counter 6

// Example:3
const lockHouse = () => {
  let password = "1234";

  const openHouse = () => {
    console.log("the password is", password); //the password is 1234
  };

  return openHouse();
};

const myAccess = lockHouse();
myAccess(); 
