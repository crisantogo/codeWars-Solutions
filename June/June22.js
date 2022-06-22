//P- Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. 
//R- An interger number or -1 if result is not an integer
//E- findNextSquare(121), //144
//P-




function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let squareRoot= Math.sqrt(sq)
    if(Number.isInteger(squareRoot)){
        console.log((squareRoot + 1)**2)
    }else 
    return -1;
  } 


  findNextSquare(121), //144
  findNextSquare(625)  //676  
