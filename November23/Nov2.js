//P- Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
//R- A sorted Array
//E- mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]

function mergeArrays(a, b) {
    // your code here
    let nuArray=a.concat(b)
    console.log(nuArray)
}

mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]
mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]