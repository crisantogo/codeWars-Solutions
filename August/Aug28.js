//P- Write a function to convert a name into initials. Strictly takes two words with one space in between them.
//R- The output should be two capital letters with a dot separating them.
//E- Sam Harris => S.H
// - patrick feeney => P.F
//P- create a new variable who's value is an empty Array
// - convert String into an Array
// - loop through Array and for each element take the charAt(0) and push to empty Array
// - use .join() to join new Array 

function abbrevName(name){
    // code away
    let initials=[]
    name=name.split(" ")
    name.map(e=>{
        initials.push(e.charAt(0).toUpperCase())
    })
    console.log(initials.join("."))
}



abbrevName("Sam Harris"), "S.H"
abbrevName("Patrick Feenan"), "P.F"