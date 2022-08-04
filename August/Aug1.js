// Write a function that returns true if the input number is -0 and false otherwise

function isNegativeZero(n) {
    return Object.is(-0,n)
  }