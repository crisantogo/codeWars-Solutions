// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
    //your function here
     if(beast.charAt(0)===dish.charAt(0)&&beast[beast.length-1]===dish[dish.length-1]){
        console.log(true)
     }else
     console.log(false)
    }


feast("great blue heron", "garlic naan"), true
feast("chickadee", "chocolate cake"), true
feast("brown bear", "bear claw"), false