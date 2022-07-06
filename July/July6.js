//P- create a function that takes in a list & reverses it. Is the list Strings, Numbers, Booleans, Arrays...? Reverse in place or does it have to be sorted first?
//R- returns a list with the reverse order.
//E- Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
//P- Create a function that accepts a list as its parameter
// - Using the .reverse() method return the list reversed in place

function reverseList(list) {
    return list.reverse()
  
  }

reverseList([1,2,3,4]), [4,3,2,1]
reverseList([3,1,5,4]), [4,5,1,3]