//P- Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
//R- A positive number
//E- ["left", "right", "left", "right"] ➞ 0

//   ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

//   ["left", "left", "left", "left"] ➞ 1
//P- Create two variables 'left' & 'right'. Have their values equal 0
// - Map through the given array and for each left or right add 90 to each respective variable's value

function spinAround(turns) {
    // Here be dragons!
    
}

spinAround(["left", "right", "left", "right"])  // 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) // 2

spinAround(["left", "left", "left", "left"]) // 1