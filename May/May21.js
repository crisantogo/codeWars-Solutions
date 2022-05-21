//P- Given two arrays; merge both into one array and sort into ascending order. Remove duplicates.
//R- Return a new array. Return an empty array if both are empty.
//E-
//P- Create a function that accepts two seperate arrays as parameters
// - Concat arrays to merge into one
// - Use the sort method to arrange new array in ascending order
// - Use filter method to remove duplicates.



function mergeArrays(arr1, arr2) {
    let newarr= (arr1.concat(arr2))
    newarr= newarr.sort((a, b) => a - b)
    let noDupes=newarr.filter((e,i)=>newarr.indexOf(e)===i)
    console.log(noDupes)
}
 

mergeArrays([1,2,3,4], [5,6,7,8]) //[1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) //[1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]) //[1,2,3,4,5,7,9,10,11,12]