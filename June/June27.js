//P- From an array of numbers, return the sum of all of the positives ones. Are the numbers integers? Are there positive numbers and/or negative numbers? Are the numbers in the form of a String in the Array? Note: if there is nothing to sum, the sum is default to 0
//R- A positive Number
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//P- Create a function that accepts an Array as a parameter. 
// - Create a new variable whose value is the given array with positive numbers filtered out. Using the .filter() method
// - Use the .reduce() method to determine the sum of the positive numbers in the filtered array

function positiveSum(arr) {
    let result = arr.filter(num=>num>0)
    if(arr==[]||result==[]){
      console.log(0)
    }else
    console.log(result.reduce((acc,c)=>acc+c, 0))
}

positiveSum([1,2,3,4,5]) //15
positiveSum([-1,-2,-3,-4,-5]) //0