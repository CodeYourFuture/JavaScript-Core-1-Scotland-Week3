let mentorsList = ["Sundar", "Reshma", "Shantanu", "Arvind"];

function isTrainee(personName) {
  if (mentorsList.includes(personName)) {
    return false;
  } else {
    return true;
  }
}

let namesList = [
  "Aria",
  "Shantanu",
  "Brian",
  "Arvind",
  "Reshma",
  "Candice",
  "Sundar",
  "Sunesh",
];

let newArray = [];
newArray = namesList.filter(isTrainee);
console.log(newArray);

// JavaScript gives us a shortcut to solve the previous exercise!

// Look at the teaching document slide 39 to see how to use array.filter

// You should be able to solve the exercise with one line of code

// console.log("Answer should be Aria, Brian, Candice, Sunesh");

// Hi, here's an alternative way of writing the same as above. <-- line 44 doesn't display console.log but line 24 does. Why is that?

let newArray2 = [];
newArray = namesList.filter((personName) => {
  if (mentorsList.includes(personName)) {
    return false;
  } else {
    return true;
  }
});
console.log(newArray2);
