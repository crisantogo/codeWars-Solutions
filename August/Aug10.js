
function digPow(n, p){
    // Get singular digits of n
    // Sum digits, but each digit incrementally increases to the power of p (increment power of p)
    // Divide sum by n
    // If divisible by n, assign that value to k
    // else return -1

    let arr = String(n).split('').map(Number)

    let sum = 0
    for(let i=0; i<arr.length;i++){
        sum+= arr[i]**p
        p++
    }
    if(sum%n===0){
        return sum/n
    }else return -1
  }

digPow(46288,3) //51