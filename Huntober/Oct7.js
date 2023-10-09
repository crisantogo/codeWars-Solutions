//P- Write a function, whose parameter is 'fight', that evaluates a string to determine which string is of greater value
//R- A string based off of which string has a greater value. If 'right side' wins return "Right side wins!". If 'left side' wins return "Left side wins!". Else return "Let's fight again!""
//E- alphabetWar("z");        //=> Right side wins!
//   alphabetWar("zdqmwpbs"); //=> Let's fight again!
//   alphabetWar("zzzzs");    //=> Right side wins!
//   alphabetWar("wwwwwwz");  //=> Left side wins!
//P- 

function alphabetWar(fight){
   return "Let's fight again!";
}

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!