// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    //coding and coding..
    str=str.replace(/[^A-Za-z]+/g, '').split('').reverse().join('')
    console.log(str) 
}

reverseLetter("krishan"),"nahsirk"
reverseLetter("ultr53o?n"),"nortlu"