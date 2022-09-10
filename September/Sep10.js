//Given two seperate Arrays, return the sum of both Arrays.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc,c)=>acc + c,0) + arr2.reduce((acc,c)=>acc + c,0)
}

arrayPlusArray([1, 2, 3], [4, 5, 6]), 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21
arrayPlusArray([0, 0, 0], [4, 5, 6]), 15
arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100