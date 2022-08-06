//P- Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//R- A String 
//E- a = "xyaabbbccccdefww" 
// - b = "xxxxyyyyabklmopq"
// - longest(a, b) -> "abcdefklmopqwxy"
//P- Concatenate s1 & s2.
// - Use .split() method to turn the String into an Array for sorting 
// - Use the .sort() method to sort the new string
// - Using the Set constructor and the spread syntax, create a new Array without the duplicates.
// - Use .join() method to return the new Array to a String.

function longest(s1, s2) {
    // your code
    let nuNu = `${s1+s2}`.split('').sort()
    let zeroDupes=[...new Set(nuNu)].join('')
    console.log(zeroDupes)
    //Can be refactored as;
    //const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  }

longest("aretheyhere", "yestheyarehere"), "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu"