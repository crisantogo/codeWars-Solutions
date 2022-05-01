// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
//E- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]=>[10, -65]

function countPositivesSumNegatives(input) {
    let countPositive=0
    let sumNegative=0
    if(input.length===0||input===null){
        console.log([])
    }else{
        input.forEach(e=>e>0?countPositive++:sumNegative+=e)
            console.log([countPositive,sumNegative])
        
    }
}    


countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])//[10, -65]
countPositivesSumNegatives([])
