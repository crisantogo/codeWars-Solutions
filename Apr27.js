//Find the area of a square based on the given arc, A

function squareArea(A){
    let circumference = A * 4
    let r = circumference/(2*Math.PI)
    return(Number((r*r).toFixed(2)))
  }