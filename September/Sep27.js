// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    if(array.length===0){
        console.log(0);
    }else
    array=array.reduce((a,b)=>a+b,0)/array.length
    console.log(array)
}

findAverage([1,1,1]), 1
findAverage([1,2,3]), 2
findAverage([1,2,3,4]), 2.5
findAverage([]), 0