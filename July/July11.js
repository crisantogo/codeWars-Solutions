//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//P- You can assume that you are only given numbers.
// - You cannot assume the size of the array.
// - You can assume that you do get an array and if the array is empty, return 0
//R- A number
//E- sum([1, 5.2, 4, 0, -1]), 9.2
//P- 


function sum (numbers) {
  return numbers.reduce((acc,c)=>acc+c,0)

}

sum([1, 5.2, 4, 0, -1]), 9.2