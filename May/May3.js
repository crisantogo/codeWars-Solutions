// P-Given 5 variables;
// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
// sharkSpeed = how fast it can move in metres/second.
// pontoonDistance = how far you need to swim to safety in metres.
// youSpeed = how fast you can swim in metres/second.
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// The pontoon, you, and the shark are all aligned in one dimension.
// R-If you make it, return "Alive!", if not, return "Shark Bait!".
// E-shark(12, 50, 4, 8, true), "Alive!"
// P-

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin===true){
        sharkSpeed=sharkSpeed/2
    }
    let myTime= pontoonDistance/youSpeed
    let sharkTime=sharkDistance/sharkSpeed
    if(myTime<sharkTime){
        alert("Alive!")
    }else
        alert("Shark Bait!")

}

shark(12, 50, 4, 8, true) //"Alive!"
shark(7, 55, 4, 16, true)//"Alive!"
shark(24, 0, 4, 8, true) //"Shark Bait!"