// P-write a method that creates an array of whole numbers that is either the sqrt or square of the original number
// R-
// E-[4,3,9,7,2,1] -> [2,9,3,49,4,1]
// P-array.map, conditionals for Math.sqrt()/Math.pow(n,2)

let arrayOfNums= [4,3,9,7,2,1]

let newArr= arrayOfNums.map(n=>{
    if (Number.isInteger(Math.sqrt(n))===true){
        return(Math.sqrt(n))
    }else if (Number.isInteger(Math.sqrt(n))===false){
        return(Math.pow(n,2))
    }
})
console.log(newArr)

let newArrTernary=arrayOfNums.map(n=>Number.isInteger(Math.sqrt(n))?Math.sqrt(n):Math.pow(n,2))
console.log(newArrTernary)