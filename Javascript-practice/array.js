// This is my journal about completing array goals & challenges on alchemy

//---------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Given an array, find the sum of all even values inside the array and return it.
*/
function sumEven(array) {
    let total = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]%2===0){
            total+=array[i];
           
        }               
    }
    return total;    
}
/*Output:-
console.log( sum([1]) ); // 0
console.log( sum([1, 2, 3, 4]) ); // 6
console.log( sum([1, 1, 4, 1, 1]) ); // 4
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function that will take an array of numbers and return a new array that only contains unique numbers.

function unique(array) {
    const newArr = [];
    for(let i = 0; i<array.length; i++){
        const element = array[i];
        if(newArr.indexOf(element)=== -1){
            newArr.push(element);
        }
    }
    return newArr;
   
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------




