// Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
    // Clear out that junk in your trunk
    console.log(str.length)
    if(num>=str.length){
        console.log(str)
    }else if(num<=3){
        console.log(`${str.slice(0,num)}`+ "...")
    }else{
        console.log(`${str.slice(0,num-3)}`+ "...")
    }

    
}

//Examples
truncateString('codewars', 9), 'codewars'
truncateString('codewars', 7), 'code...'
truncateString('codewars', 2), 'co...'
truncateString('A-tisket a-tasket A green and yellow basket', 43), 'A-tisket a-tasket A green and yellow basket'