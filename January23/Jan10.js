// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    // ...
    let consonants = "bcdfghjklmnpqrstvwxyz",
        count=0
    
    str.split('').map(l=>{
        if(consonants.includes(l.toLowerCase())){
            count+=1
        }
    })
    console.log(count)
}

consonantCount(''), 0 
consonantCount('aaaaa'), 0 
consonantCount('XaeiouX'), 2
consonantCount('Bbbbb'), 5