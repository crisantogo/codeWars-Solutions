// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    // ...
    let vowels = ['a','e','i','o','u'],
        digits=[]

  for(let char of s){
    if(vowels.includes(char.toLowerCase())){
        digits.push('1')
    }else digits.push('0')
  }
  console.log(digits.join(''))
}

vowelOne( "vowelOne" ), "01010101" 