
// Scope

// This variable has GLOBAL scope
let myName = "Richard";


if(myName === "Richard"){
    // This variable has LOCAL scope, it only exists inside the "if" statement
    let myAge = 45;
    console.log(myAge);
}

// This line of code throws an error! What is the error?
//console.log(myAge);

// How can we fix the error?
//Put console.log(myAge); in if statement