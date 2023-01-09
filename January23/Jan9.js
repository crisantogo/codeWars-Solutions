// Create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// Examples
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

function aliasGen(name,lastname){
    // Code Here
  name= name[0].toUpperCase()
  lastname=lastname[0].toUpperCase()
  
  let hacker=`${firstName[name]} ${surname[lastname]}`
  
  if(isNaN(name)==true && isNaN(lastname)) {      //Can also check if the object value exists; 'if(firstName[auxFirst] && surname[auxLast]){}'
    return hacker
  }else return  "Your name must start with a letter from A - Z."

}

//Object provided at https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript

aliasGen("Mike", "Millington"), "Malware Mike"
aliasGen("Fahima", "Tash"), "Function T-Rex"
aliasGen("Daisy", "Petrovic"), "Data Payload"
aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z."
aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z."