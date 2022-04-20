function findMultiples(integer, limit) {
    //your code here
    let results=[]
    for (i=integer; i<=limit;i+=integer){
      results.push(i)
    }
    console.log(results)
  }
  findMultiples(5,25)