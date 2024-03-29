//P- Write a function that returns an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
//R- An Array
//E- fizzbuzz(3) -->  [1, 2, "Fizz"]
//P- Create a variable whose value is an empty array.
// - Loop from 1 to parametered value N.
// - Push each value to the empty Array unless the conditions are met then instead push one of fizz,buzz or fizzbuzz.

function fizzbuzz(n){
  let buzzFizz=[]

  for(i=1; i<=n; i++){
    if(i%3==0 && i%5==0){
        buzzFizz.push("FizzBuzz")
    }else if(i%3==0){
        buzzFizz.push("Fizz")
    }else if (i%5==0){
        buzzFizz.push("Buzz")
    }else buzzFizz.push(i)
  }

  console.log(buzzFizz)
}

fizzbuzz(3) //[1, 2, "Fizz"]
fizzbuzz(15)