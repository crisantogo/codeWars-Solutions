//P- Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//R- A new Araay with additional String 
//Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//P- Create a function that accepts an Array as a parameter.
// - Create a new variable with an empty Array as its value within the function
// - Use a for loop with the Array argument's length as the number of iterations.
// - For each iteration push the new string to the variable we created previously.
// - Return the new Array with the new string.

var number=function(array){
    //your awesome code here
    let newString=[]
    for(i=0; i<=array.length-1; i++){
        newString.push(`${i+1}: ${array[i]}`)
    }console.log(newString)
  }


number([]), //[], 'Empty array should return empty array';
number(["a", "b", "c"]) //["1: a", "2: b", "3: c"], 'Return the correct line numbers'