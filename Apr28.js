// P-Given a number, return if should be plural
// R-True, if plural, otherwise false
// E- plural(2)=> true
// P-
function plural(n) {
    // ...
    if(n!==1){
      console.log(true)
    }else {
        console.log(false)
    }
  }
//let plural = n => n!==1?true:false
  plural(0)//true
  plural(100)//true
  plural(1)//false