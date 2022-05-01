// P-Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// R-
// E-Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
// P-

function pipeFix(numbers){
    let indexMin= numbers[0]
    let indexMax= numbers[numbers.length-1]
    let fixedList= []
    for (i=indexMin;i<=indexMax;i++){
        fixedList.push(i)
    }
    console.log(fixedList)
}
pipeFix([1,3,5,6,7,8]) //1,2,3,4,5,6,7,8

// let indexTest = [1,3,5,6,7,8]

// console.log(indexTest[0])
// console.log(indexTest[indexTest.length-1])
// console.log(indexTest.length)