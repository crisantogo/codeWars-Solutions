//P- Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.
//R- An Array.
//E-
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
//P- Create a copy of the Array that will be mutated. To do this create a variable whose value is an Array with the function parameter as spread syntax, within
// - Create another variable whose value is the indexOf the first smallest number in the Array. To do this we use the Math.min method inside of the indexOf method. We also use the spread syntax of the copied Array inside of the Math.min method.
//- Once we have the value of the minimum number we use the splice() method on the copied Array. Start at the indexOf value and deleteCount of 1
//- Return the copied Array

function removeSmallest(numbers) {
    //throw "TODO: removeSmallest";
     let numbersCopy = [...numbers]
    let toChopIndex = numbersCopy.indexOf(Math.min(...numbersCopy))
    numbersCopy.splice(toChopIndex,1);
    //return numbersCopy
    console.log(numbersCopy)
  }

removeSmallest([1, 2, 3, 4, 5]) //[2, 3, 4, 5]
removeSmallest([2, 2, 1, 2, 1]) //[2, 2, 2, 1]