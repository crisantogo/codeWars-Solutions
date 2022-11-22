// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    let inverted = array.map( x => {
        if(x === 0){
            return -0
        }else if(Math.sign(x)===1){
            return -Math.abs(x)
        }else return Math.abs(x)
    })
    console.log(inverted);

    //Alternatively
    //return array.map(num=>num*-1); A negative times a negative equals a positive
}

invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]
invert([0])