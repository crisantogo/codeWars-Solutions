//P- Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
//R- A positive number
//E- ["left", "right", "left", "right"] ➞ 0

//   ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

//   ["left", "left", "left", "left"] ➞ 1
//P- Create two variables 'left' & 'right'. Have their values equal 0
// - Map through the given array and for each left or right add 90 to each respective variable's value
// - Subtract left from right and divide the remainder by 360 to determine the number of turns.
// - Use Math.floor() to round down if the number is not a whole number.
// - Use Math.abs() to return a positive number. 

function spinAround(turns) {
    // Here be dragons!
    let left=0,
        right=0

    turns.map(e=>{
        if(e=='left'){
            left+=90
        }else if(e=='right'){
            right+=90
        }
    })

    console.log(Math.abs(Math.floor((left - right)/360)))   
}

spinAround(["left", "right", "left", "right"])  // 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) // 2

spinAround(["left", "left", "left", "left"]) // 1