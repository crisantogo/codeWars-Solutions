//P- Given an array a and a value x, check whether the provided array contains the value. Array can contain numbers or strings. X can be either.
//R- Return true or false
//E- check([66, 101], 66), true
//P-

function check(a, x) {
    console.log(a.includes(x))
}

//For Loop solution
//function check(a,x){
    // for (let i=0; i<a.length;i++){
    //     console.log(a[i])
    //     if (a[i]==x){ return true }
    //   }
    //   return false
    // }

check([66, 101], 66), true
check(['t', 'e', 's', 't'],'e'), true
check(['what', 'a', 'great', 'kata'], 'kat'), false