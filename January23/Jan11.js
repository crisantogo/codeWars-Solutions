// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

function minMinMax(array) {
    // solution goes here!
    let max=Math.max(...array)
    let min=Math.min(...array)
    //using Math.max/min here to find the largest/smallest number in the Array. Using spread syntax to iterate through array.
    let minAbsent=0

    for(i=min;i<=max;i++){
        if(array.includes(i)==false){
            minAbsent=i;break //use break to stop the loop when the if statement resolves to true
        }
    }
    console.log([min,minAbsent,max])
}

minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]