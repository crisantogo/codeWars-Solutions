//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//Return a Number
// [true,  true,  true,  false,
// true,  true,  true,  true ,
// true,  false, true,  false,
// true,  false, false, true ,
// true,  true,  true,  true ,
// false, false, true,  true] => 17

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let present=[]
    arrayOfSheep.map(value=>{
        if(value===true){
            present.push(value)
        }
    })
    console.log(present.length)
  }


countSheeps([true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true]) //17
