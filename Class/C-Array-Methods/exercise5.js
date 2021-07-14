

// 1. Write a function called capitaliseName 
// It should have one input parameter called theName
// It should return the name in capitals - do an internet search for javascript toUpperCase



function capitaliseName (theName) {
    return theName.toUpperCase();
}


// 2. Use array.map to create a new array with all the values in namesList converted to capitals
let messyNames = ["Sundar", "Reshma", "Shantanu", "Arvind"];
let theName = messyNames.map(capitaliseName);
    console.log(theName);

// 3. Print the new array to the screen
