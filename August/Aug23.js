//P- Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor
//R- An Array of numbers
//E- [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//P-

function divisibleBy(numbers, divisor){
   let newArr=[] 
   numbers.map(num=>{
    if(num%divisor==0){
        newArr.push(num)
    }
   })
   console.log(newArr)
   // codeWars solution;
   // return numbers.filter(n => n % divisor === 0)
}


divisibleBy([1, 2, 3, 4, 5, 6], 2) //[2, 4, 6]