//Debug the given code

function howManyDalmatians(number) {
  
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    var respond = number <= 10 ? dogs[0]:number <= 50 ? dogs[1]:number >= 101 ? dogs[3] : dogs[2]
    
    console.log(respond)
}

howManyDalmatians(26)//"More than a handful!"
howManyDalmatians(101) //"101 DALMATIANS!!!"
howManyDalmatians(100) //"Woah that's a lot of dogs!"