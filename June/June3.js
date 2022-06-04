//P- Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//R- A number 
//E- summation(8) -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//P- Create a variable with an empty Array
// - Creat for loop with iterations starting at 1 and up to the num parameter.
// - Push to empty Array.
// - Use the reduce method on Array to find the sum

var summation = function (num) {
    // Code here
    let numArr=[]
    for(i=1;i<=num;i++){
        numArr.push(i)
    }console.log(numArr.reduce((a,b)=>a+b))
  }

summation(8) //-> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)