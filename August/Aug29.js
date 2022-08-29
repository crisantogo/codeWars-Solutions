// Reverse all of the words within the string passed into the function

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
  }