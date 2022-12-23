// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorEl(arr){
    let arrMap={},
        count=0,
        maxNum=null
    
    for (const num of arr) {
        arrMap[num]=arrMap[num] + 1 || 1
    }
    console.log(arrMap)

    for (const num in arrMap) {
        if(arrMap[num]> count){
            count=arrMap[num]
            maxNum=num
        }
    }
    console.log(maxNum)
}

majorEl([3,2,3])
majorEl([2,2,1,1,1,2,2])