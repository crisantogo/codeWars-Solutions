//P- When provided with a letter, return its position in the alphabet. Is letter uppercase or lowercase? Will the provided letter be a single letter or multiple letters
//R- A string
//E- Input :: "a"
// - Ouput :: "Position of alphabet: 1"
//P- Can be solved in 3 ways;
// - Create an object then call the object value in a template literal,
// - Create an array, loop thru the array, call the array element position + 1 in a template literal
// - Create a variable whose value is a string containing all letters of the alphabet. Call the indexOf value + 1 in a template literal.

function position(letter){
    //Write your own Code!
    let alphabet={
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    }
    console.log(`Position of alphabet: ${alphabet[letter]}`)
    //Common codewars solution
    //const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1)
}

position("a"),"Position of alphabet: 1"
position("z"),"Position of alphabet: 26"