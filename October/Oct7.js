// Given an Array of numbers, return a new array with the numbers that are a multiple of its index. Array length is always greater than 0
// Example;
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
// Create a new variable whose value is an empty Array
// Map through the given Array parameter. Write a conditional that states if element modulus index is equivalent to zero, push that value to new Array. Return new Array.

function multipleOfIndex(array) {
    // good luck
    let newarr=[]
    array.map((e,i)=>{
        if(e%i===0){
            newarr.push(e)
        }
    })
    return newarr

    //Alternatively;
    // return array.filter((num, i) => num % i === 0)
}

// Test Cases;
multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]
multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]
multipleOfIndex([11, -11]), [-11]