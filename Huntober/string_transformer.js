// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    // Your code here
    str=str.split(' ').reverse().join(' ')
    str=str.split('').map(l=>{
        if(l===l.toLowerCase()){
            return l.toUpperCase()
        }else if(l===l.toUpperCase()){
            return l.toLowerCase()
        }
    }).join('')
    console.log(str)

    //codeWars solution;

    //return str
    // .split(' ')
    // .reverse()
    // .join(' ')
    // .split('')
    // .map(v => v == v.toUpperCase() ?
    //   v.toLowerCase() :
    //   v.toUpperCase())
    // .join('');
}

stringTransformer('Example string'), 'STRING eXAMPLE'