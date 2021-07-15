
// In this exercise we want to create a NEW array with only numbers less than 18

let numbersList = [4, 10, 22, 34, 16, 18];

// Here we declare an empty array

let array = [];
for (let i = 0; i<numbersList.length; i++){
    if(numbersList[i]< 18){
        //console.log(numbersList[i]);//
        array.push(numbersList[i]);
    }

}
console.log(array);








