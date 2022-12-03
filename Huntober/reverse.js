// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str){
    let reverseStr=""
    for (let char of str) {
        reverseStr=char + reverseStr
    }
    console.log(reverseStr)
}

reverseString("John")
reverseString("Chris")