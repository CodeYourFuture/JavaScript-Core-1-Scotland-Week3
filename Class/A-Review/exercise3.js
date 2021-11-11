// Scope

// This variable has GLOBAL scope
let myName = "Richard";
let myAge = 45;

if (myName === "Richard") {
  // This variable has LOCAL scope, it only exists inside the "if" statement
  //let myAge = 45;
  myAge = 45;
}

// This line of code throws an error! What is the error?
console.log(myAge);

// How can we fix the error?
