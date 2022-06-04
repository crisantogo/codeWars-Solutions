// P- Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// R- A String
// E- "String"      -> "SSttrriinngg"
// *  "Hello World" -> "HHeelllloo  WWoorrlldd"
// *  "1234!_ "     -> "11223344!!__  "
// P-


function doubleChar(str) {
    // Your code here
    let firstArray= str.split('')
    let secondArray= firstArray.map(e=> e.repeat(2))
    console.log(secondArray.join(''))
  }
// As a single line;
// const doubleChar = (str) => str.split("").map(c => c + c).join("");
  
doubleChar("String") //"SSttrriinngg"