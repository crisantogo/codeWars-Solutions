//Complete the function that takes a noun as a string, and returns the preferred band name written as a string.

//bandNameGenerator('knife'), 'The Knife'

//However, when a noun STARTS and ENDS with the same letter, repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front)

//bandNameGenerator('tart'), 'Tartart'

function bandNameGenerator(str) {
    // Happy coding
    if(str[0]===str[str.length-1]){
        console.log(`${str[0].toUpperCase()}${str.slice(1)}${str.slice(1)}`)
    }else
        console.log(`The ${str[0].toUpperCase()}${str.slice(1)}`)

}


bandNameGenerator('knife'), 'The Knife'
bandNameGenerator('tart'), 'Tartart'