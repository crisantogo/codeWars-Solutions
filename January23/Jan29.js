// Implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
// Note: only positive integers will be tested.

function sumOfIntegersInString(s){
    let count=0
    s=s.split("").map(n=>{if(+n){
        count+= +n
    }})
    console.log(count)
    
}

sumOfIntegersInString("h3ll0w0rld"), 3
sumOfIntegersInString("12.4"), 16