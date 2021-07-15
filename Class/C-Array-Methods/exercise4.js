// We want a new array with all the numbers doubled

let numbersList = [5, 3, 15, 8, 24, 31, 12];

function doubleValue(x) {
  return x * 2;
}

let doubledNumbers = [];

doubledNumbers = numbersList.map(doubleValue);

doubledNumbersV2 = numbersList.map((x) => x * 2); // implicit arrow function's syntax still puzles me.
// JavaScript gives us a shortcut to solve the previous exercise!

// Look at the teaching document slide 59 to see how to use array.map

// You should be able to solve the exercise with one line of code

console.log(doubledNumbersV2);
