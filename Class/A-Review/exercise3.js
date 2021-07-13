
// Scope

// This variable has GLOBAL scope
let myName = "Richard";
let myAge = 41;

if(myName === "Richard"){
    // This variable has LOCAL scope, it only exists inside the "if" statement
    myAge = 45;
}

// This line of code throws an error! What is the error? myAge is not defined
console.log(myAge);

// How can we fix the error? By declaring the variable at the global level