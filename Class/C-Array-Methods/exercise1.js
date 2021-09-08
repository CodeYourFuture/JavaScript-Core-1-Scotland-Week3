
let mentorsList = ["Sundar", "Reshma", "Shantanu", "Arvind"];

function isTrainee(personName){
    if(mentorsList.includes(personName)){
        return false;
    }else{
        return true;
    }
}

let namesList = ["Aria", "Shantanu", "Brian", "Arvind", "Reshma", "Candice", "Sundar", "Sunesh"];
//                 0           1        2               ...
//  n   amesList[0];
// 
let newArray = [];

// Write a "for" loop which ITERATES over the namesList array
// Call the isTrainee function for each value
// add each name to the new array only if the name is NOT a mentor


for (let i = 0; i < namesList.length; i += 1) {
    // Check if name belongs to a Trainee:
    if (isTrainee(namesList[i]) == true ) {
        // use newArray to add values that are names of Trainees
        newArray.push(namesList[i]);
    }
}


console.log("Aria, Brian, Candice, Sunesh");
console.log(newArray); 
