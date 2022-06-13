// P- Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// R- true||false
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// P-

function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending)
    // or, return str.slice(-ending.length) == ending ? true: false;
  }
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false