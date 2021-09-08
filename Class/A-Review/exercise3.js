
// Scope

// This variable has GLOBAL scope
let myName = "Richard";

if (myName === "Richard") {
    // This variable has LOCAL scope, it only exists inside the "if" statement
    let myAge = 50;
    console.log(myAge);
}

// This line of code throws an error! What is the error?


// How can we fix the error?