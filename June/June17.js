//P- Given an integer n and two other values, build an array of size n filled with these two values alternating.
//R- An Array 
//E- Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
//P- Create a function that accepts the parameters n, firstValue & secondValue.
// - Create a new variable with an empty Array as its value.
// - With a 'for' loop, beginning a zero, iterate incrementally up to the value less than(<) 'n'.
// - Use conditionals to push the firstValue & secondValue to their alternating Array indices.

function alternate(n, firstValue, secondValue){
    // your code
    let finalArr=[]
    for(i=0; i<n; i++){
        if(n==0){
            console.log(finalArr)
        }else if(i%2===0){
            finalArr.push(firstValue)
        }else if(i%2!==0){
            finalArr.push(secondValue)
        }
    }
    console.log(finalArr)
  }



alternate(5, true, false)  
alternate(20, 'blue', 'red')
alternate(0, "lemons", "apples") //[]