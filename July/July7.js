//P- Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//R- return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
//E- setAlarm(true, true) -> false
// - setAlarm(false, true) -> false
// - setAlarm(false, false) -> false
// - setAlarm(true, false) -> true




function setAlarm(employed, vacation){
    console.log(employed===true&&vacation===false?true:false)

}

setAlarm(true, true) //-> false
setAlarm(false, true) //-> false
setAlarm(false, false) //-> false
setAlarm(true, false) //-> true