// P-Use array to find the average of all scores
// R-True or False based on result of array.
// E-([3,5],5)===True, else false
// P-create a function that accepts an array as one parameter and your score as the other parameter. Find the average of the array, compare it to your score. True if better, else false. 

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let theAverage = (classPoints.reduce((acc,c)=>acc+c))/classPoints.length
    return(yourPoints > theAverage?true:false)

  }

  betterThanAverage([3,5], 5)