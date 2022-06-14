//P- Create a function that squares each number passed into it and then sums the results together.
//R- A number
//E- [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
//P- Create a function that accepts an Array of numbers as a parameter
// - Use the .map() method to iterate through the Array and square each number
// - Use the .reduce() method to find the sum of the newly squared numbers
// - Use a conditional to account for empty Arrays

function squareSum(numbers){
    if(numbers.length>0){
        return numbers.map(num=>num**2).reduce((acc,c)=>acc+c)
       }else return 0
}

squareSum([1,2,2]) //9