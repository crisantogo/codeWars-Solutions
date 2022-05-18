//P- Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//R- An array of numbers
//E- a = 1
//   b = 4
// --> [1, 2, 3, 4]
//P- Create a function that accepts two parameters a & b 
// - Create an empty array
// - Create a for loop using the parameters a & b as start and end points, respectively. 
// - Use the push method to push to empty array.
// - Return array . 

function between(a, b) {
    // your code here
    let arr=[]
    for(i=a; i<=b; i++){
        arr.push(i)
    }console.log(arr)
  }

  between(1,4)
  between(-2, 2)//[-2, -1, 0, 1, 2]