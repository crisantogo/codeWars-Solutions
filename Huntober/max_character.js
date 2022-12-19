//Given a string of characters, return the character that appears the most often.

function max(str){
    let charMap={},
        count= 0,
        maxChar=null
    
    for (const char of str) {
        charMap[char]=charMap[char] + 1 || 1
    }
    console.log(charMap)

    for (const char in charMap) {
        if(charMap[char]> count){ //first time this runs => charMap[H] === 1
            count=charMap[char]   //therefore count becomes 1
            maxChar=char          //when the loop reaches to l charMap[l]=== 3; therefore count===3
            
        }
    }
    console.log(maxChar)
}

 max("Hello World!"), "l"