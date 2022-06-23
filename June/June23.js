//P- For each number of 'beads' "n", where n > 2, return the amount needed so that there are two more beads between each of the intial beads.
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