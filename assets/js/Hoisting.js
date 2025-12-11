// JavaScript hoisting means that variable and function declarations are moved to the top of their scope during the compilation phase, before the code actually runs.

// 1. Hoisting with function
// Function Declarations are hoisted completely (with their code).
// example 1:
addNoDeclaration();

function addNoDeclaration() {
  console.log("declaration");
}

// example2:
// addNoExpression();  //Uncaught TypeError: addNoExpression is not a function
var addNoExpression = function () {
  console.log("Expression");
};

addNoExpression()  //Expression

