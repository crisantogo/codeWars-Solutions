// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.


function factory(x){
    return function(array){
      console.log(array.map(el=>el*x))
    }
}

let myArray = [1, 2, 3];
const threes = factory(3)
threes(myArray)

const fives = factory(5);
fives(myArray)