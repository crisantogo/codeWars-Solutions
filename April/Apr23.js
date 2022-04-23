// P- return the digits of a random number within an array in reverse order.
// R- 348597 => [7,9,5,8,4,3]
// E- digitize(348597)=> [7,9,5,8,4,3]
// P-
function digitize(n) {
    //code here
      let newArr=Array.from(String(n), Number).reverse()
      console.log(newArr)
  }


digitize(348597) 