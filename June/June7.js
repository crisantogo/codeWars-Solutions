//P- Given a string of space separated numbers, and have to return the highest and lowest number.
//R- Return a string with two numbers, highest first, lowest second and seperated by a space.
//E- highAndLow("1 2 3 4 5");  // return "5 1"
// - highAndLow("1 2 -3 4 5"); // return "5 -3"
// - highAndLow("1 9 3 4 -5"); // return "9 -5"
//P- Create a function that accepts a String of numbers as a parameter
// - Use .split() method to turn string into an Array. Use .sort() to sort Array.
// - Return the value of the last and first index of the Array as a String.


function highAndLow(numbers){
    // ...
    let numArr=numbers.split(" ")
    let sortArr=numArr.sort((a,b)=> a-b)
    console.log(`${sortArr[sortArr.length-1]}`+' '+`${sortArr[0]}`)
  }

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"