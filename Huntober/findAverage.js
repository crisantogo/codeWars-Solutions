//Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((a,b)=>a+b,0)/marks.length) //Math.floor() returns the rounded average
}

getAverage([2,2,2,2]),2
getAverage([1,2,3,4,5,]),3
getAverage([1,1,1,1,1,1,1,2]),1