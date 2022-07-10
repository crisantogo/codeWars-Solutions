//P- Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
//R- A Number
//E- divCon([9, 3, '7', '3']), 2
//P- Create a function that accepts an Array as a parameter
// - Create two variables whose value is an empty an Array
// - Loop through the given Array, push String integers to one Array and Numbers to the other
// - Make String intergers a Number using Number()
// - .reduce() both Arrays 
// - Subtract String integer total from non-String integer.

function divCon(x){
    let nonString = []
    let stringNums = []
    for(i=0;i<x.length;i++){
        if(x[i]===String(x[i])){
            stringNums.push(x[i])
        }else
        nonString.push(x[i])
    }
    stringNums=stringNums.map(str=> Number(str))
    stringNums=stringNums.reduce((acc,c)=>acc+c)
    nonString=nonString.reduce((acc,c)=>acc+c)
    let dif= nonString-stringNums
    console.log(dif)
}

divCon([9, 3, '7', '3']), 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13