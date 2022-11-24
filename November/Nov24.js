// Return the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    let multiples=[]
    for(i=0; i<number; i++){
        if(i<=0){
            multiples.push(0)
        }else if(i%3===0 || i%5===0){
            multiples.push(i)
        }
    }
    let sum= multiples.reduce((acc,c)=>acc+c,0)
    console.log(sum)
}

solution(10), 23