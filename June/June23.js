//P- For each number of 'blue beads' "n", where n > 2, return the amount needed so that there are two 'red beads' between each of the 'blue beads'.
//R- A Number, if n < 2 return 0
//E- countRedBeads(3), 4
//P- 

function countRedBeads(n) {
    //your code here
    if(n>2){
        return (n-1)*2
    }else
    return 0
  }


countRedBeads(3), 4
countRedBeads(5), 8