//P- Given an array of integers your solution should find the smallest integer.
//R- Return the smallest integer
//E- [34, 15, 88, 2] => 2
//P- Create a function that accepts an array as a parameter
// - Sort Array to be in ascending order
// - Return the value of index 0 in sorted Array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let newArr= args.sort((a, b) => a - b)
      console.log(newArr[0])
    }
  }

  let sif = new SmallestIntegerFinder()
  sif.findSmallestInt([78,56,232,12,8]) //8  