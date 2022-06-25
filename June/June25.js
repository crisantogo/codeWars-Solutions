//P- multiply a given number by eight if it is an even number and by nine otherwise.
//R- a Number
//E- simpleMultiplication(2)=>16
//P-

function simpleMultiplication(number) {
    // your code........
    return number % 2===0?number*8:number*9
}

simpleMultiplication(2) //16
simpleMultiplication(1) //9