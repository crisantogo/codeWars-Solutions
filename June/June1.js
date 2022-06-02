//P- Build a function that returns an array of integers from n to 1 where n>0.
//R- An Array of integers in descending order from N
//Example : n=5 --> [5,4,3,2,1]
//P- Create a function that takes a parameter of n
// - Create a variable with an array as its value
// - Create a for loop that returns integers from 1 to n.
// - Push results to array variable
// - Use reverse method to return the reverse of the created array

const reverseSeq = n => {
    let revArr = []
    for(i=n;i>=1;i--){
        revArr.push(i)
    }
    console.log(revArr)
  };

reverseSeq(5)