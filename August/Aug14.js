//P- Given an Array with nested Arrays, each nested Array consisting of Strings & a Number, determine if a letter in the given string corresponds with the given number in the same nesteed Array. For each time a letter matches with a Number, count as 1pt. Determine the amount of points from the given array, is equal to the points needed to win  
//R- If points from the Array are more than or equal return the String 'Winner!' else return 'Loser!'
//E- [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1 => 'Winner!' (The letter A in the first nested Array is equal to 65 in ASCII characters which grants 1 point)
//P- Split strings. Loop through the split string to determine if any of the letters correspond to the number within the same Array
// - Compare the number of matches to the number given seperate of the Arrays.

// codeWars solution
// Use of charCodeAt()
// String.fromCharCode()
function bingo(ticket, win){
    let count = 0;
    
    ticket.forEach(game => {
      if (game[0].includes(String.fromCharCode(game[1]))) {
        count++;
      }
    });
    
    return (count >= win) ? "Winner!" : "Loser!";
   
}
// function bingo(ticket, win){
//     let count=0;
//      for(let i in ticket){
//        let word = ticket[i][0];
//        let mini = ticket[i][1];
//        count+=[...word].find(e=>e.charCodeAt()==mini)?1:0;  
//      }
     
//      if(count>=win){
//        return "Winner!"
//      }
     
//      return "Loser!"
   
// }

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!'
bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!'
bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!'
