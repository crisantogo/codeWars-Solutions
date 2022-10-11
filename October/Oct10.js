function isItAPalindrome(word){
    console.log(word===word.split('').reverse().join('')?true:false)
}

isItAPalindrome('racecar') , true
isItAPalindrome('bob') , true
isItAPalindrome('tacos') , false