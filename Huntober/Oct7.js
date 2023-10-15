//7kyu
//P- Write a function, whose parameter is 'fight', that evaluates a string to determine which string is of greater value.
// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
//R- A string based off of which string has a greater value. If 'right side' wins return "Right side wins!". If 'left side' wins return "Left side wins!". Else return "Let's fight again!""
//E- alphabetWar("z");        //=> Right side wins!
//   alphabetWar("zdqmwpbs"); //=> Let's fight again!
//   alphabetWar("zzzzs");    //=> Right side wins!
//   alphabetWar("wwwwwwz");  //=> Left side wins!
//P- Assign each variable its relevant value
// - Create two empty arrays(left side & right side)
// - 'split' the string parameter. Loop through the string & push the relevant values to the empty arrays
// - 'reduce' both arrays & compare the values to determine win or draw.

function alphabetWar(fight){
   let rightSide=[],
       leftSide=[] 
    
    fight=fight.split('').map(e=>{
       if (e=="w") {
        leftSide.push(4)
       } else if(e=="p"){
        leftSide.push(3)
       } 
    })
    console.log(leftSide)
}

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!