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
       } else if(e=="b"){
        leftSide.push(2)
       } else if(e=="s"){
        leftSide.push(1)
       } else if(e=="m"){
        rightSide.push(4)
       } else if(e=="q"){
        rightSide.push(3)
       }  else if(e=="d"){
        rightSide.push(2)
       }  else if(e=="z"){
        rightSide.push(1)
       }
    })
   
    leftSide=leftSide.reduce((a,b)=>a+b,0)
    rightSide=rightSide.reduce((a,b)=>a+b,0)
    
    if(leftSide>rightSide){
        console.log("Left side wins!")
    } else if(rightSide>leftSide){
        console.log("Right side wins!")
    } else 
        console.log("Let's fight again!")

    // Codewars solution;   
    // let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    // let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    // return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";    
}

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!