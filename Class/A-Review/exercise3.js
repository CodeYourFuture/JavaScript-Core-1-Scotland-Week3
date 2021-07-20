// Scope
let myAge = 0;

// This variable has GLOBAL scope
let myName = "Richard";

if (myName === "Richard") {
  // This variable has LOCAL scope, it only exists inside the "if" statement
  myAge = 45;
}

// This line of code throws an error! What is the error?
// Uncaught ReferenceError: `myAge is not defined`
console.log(myAge);

// How can we fix the error?
// As the variable myAge is declared within the if statement conditional rule
// it exists only in this LOCAL scope and therefore doesn't exist in GLOBAL scope.
// To fix the error I have declared the myAge variable in the GLOBAL scope
// and initialised it with a value equal to 0;
