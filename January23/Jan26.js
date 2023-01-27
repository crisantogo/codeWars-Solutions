// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    //start-here
    str=str.split(' ').map(word=>word + ` ${word.length}`)
    console.log(str)
}


addLength('apple ban'),["apple 5", "ban 3"]