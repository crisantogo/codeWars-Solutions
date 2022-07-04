//P- Your task is to find the nearest square number, nearest_sq(n), of a positive integer n. Is the number in the form of a String?
//R- A number
//E- nearestSq(1),1
//P- 

function nearestSq(n){
    // your code
    let nearestSqrt = Math.round(Math.sqrt(n))
    return Math.pow(nearestSqrt,2)
}

nearestSq(2),1
nearestSq(111),121
nearestSq(9999),10000