//P- write a function that accepts three parameters:
// - cap is the amount of people the bus can hold excluding the driver.
// - on is the number of people on the bus excluding the driver.
// - wait is the number of people waiting to get on to the bus excluding the driver.
//R- If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//E- enough(10, 5, 5), 0
//P-

function enough(cap, on, wait) {
    let space = cap - on 
    if(space>=wait){
        console.log(0)
    }else
    console.log(wait-space)
    //single line-
    //return space>=wait?0:wait-space
}

enough(10, 5, 5), 0
enough(100, 60, 50), 10
enough(20, 5, 5), 0