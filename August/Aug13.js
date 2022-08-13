//P- Given an array with 5 values, determine the total number of points.
// - Three 1's => 1000 points
// - Three 5's =>  500 points
// - Three 6's =>  600 points
// - Three 4's =>  400 points
// - Three 3's =>  300 points
// - Three 2's =>  200 points
// - One   1   =>  100 points
// - One   5   =>   50 point
// - N.B, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
//R- A number whose value is equal to the total number of points
//E- 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
// - 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
// - 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
//P- Loop through the array & count the number of times a given number occurs.
// - Write a conditional based on the number of the times the number occurs.
// - Return the sum 

function score( dice ) {
    // Fill me in!
    let preSum = []
    if((dice.filter(v=>v===1).length)===5){
        preSum.push(1200)
    }
    if((dice.filter(v=>v===1).length)===4){
        preSum.push(1100)
    }
    if((dice.filter(v=>v===1).length)===3){
        preSum.push(1000)
    }
    if((dice.filter(v=>v===1).length)===2){
        preSum.push(200)
    }
    if((dice.filter(v=>v===1).length)===1){
        preSum.push(100)
    }
    if((dice.filter(v=>v===6).length)>=3){
        preSum.push(600)
    }
    if((dice.filter(v=>v===5).length)===5){
        preSum.push(600)
    }
    if((dice.filter(v=>v===5).length)===4){
        preSum.push(550)
    }
    if((dice.filter(v=>v===5).length)===3){
        preSum.push(500)
    }
    if((dice.filter(v=>v===5).length)===2){
        preSum.push(100)
    }
    if((dice.filter(v=>v===5).length)===1){
        preSum.push(50)
    }
    if((dice.filter(v=>v===4).length)>=3){
        preSum.push(400)
    }
    if((dice.filter(v=>v===3).length)>=3){
        preSum.push(300)
    }
    if((dice.filter(v=>v===2).length)>=3){
        preSum.push(200)
    }
    let sumSum=preSum.reduce((acc,c)=>acc+c,0)
    console.log(sumSum)
  }

score( [2, 3, 4, 6, 2] ) // 0
score( [4, 4, 4, 3, 3] ) // 400
score( [2, 4, 4, 5, 4] ) // 450
score( [4, 4, 4, 1, 1] ) // 600
score( [5, 1, 3, 4, 1] ) // 250:  50 (for the 5) + 2 * 100 (for the 1s)
score( [1, 1, 1, 3, 1] ) // 1100: 1000 (for three 1s) + 100 (for the other 1)
score( [3, 3, 3, 3, 3] ) // 300