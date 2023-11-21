//P- Find the sum of all multiples of n below m. n and m are natural numbers (positive integers). m is excluded from the multiples.
//R- A number
//E- sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//   sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//   sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//   sumMul(4, -7)  ==> "INVALID"
//P- Create a variable whose value is 0.
// - Loop through the numbers in the parameters, adding each value to the variable previously created
// - Return the sum

function sumMul(n,m){
    //your idea here
    let sum=0 

    for(i=n; i<m; i++){
        if(i%n==0){
            sum+=i
        }
    }

    if(sum>0){
        return sum
      }else return "INVALID"
}

sumMul(2, 9)      //2 + 4 + 6 + 8 = 20
sumMul(3, 13)     //3 + 6 + 9 + 12 = 30
sumMul(4, 123)    //4 + 8 + 12 + ... = 1860
sumMul(4, -7)     //"INVALID"