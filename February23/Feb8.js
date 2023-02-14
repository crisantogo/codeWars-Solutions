// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

//Iterate through the Array
//Sort each Array
//Push the number at index 0 to new Array
//Reduce new Array

function sumOfMinimums(arr) {
    // your code here
    let newArr=[]

    for(i=0;i<arr.length;i++){
        arr[i].sort((a,b)=>a-b)
    }

    arr.map(a=>newArr.push(a[0]))
    return newArr.reduce((acc,c)=>acc+c,0)

    //Using spread syntax and Math.min
    //return arr.reduce((acc, c) => acc + Math.min(...c), 0);
}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9