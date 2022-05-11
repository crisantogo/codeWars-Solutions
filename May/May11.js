// P- Given a number n, return the number of positive odd numbers below n, EASY!
// R- 
// E-(Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// P- Create a function that receives the parameter, n.
//  - Create a variable with an empty array.
//  - Create a for loop where the number of iteratons is less than the given number, n
//  - Push each iteration to the empty array
//  - Print/return, array length

function oddCount(n){
    // your code here
    let count=[]
    for(i=1; i<n; i+=2){
      count.push(i)
    }
    console.log(count.length)
    // Alternatively
    // Math.floor(n/2)
  }


oddCount(7)  //3
oddCount(15) //7
oddCount(15023) //7511