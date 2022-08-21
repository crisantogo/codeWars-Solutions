//P- Given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. You should not remove or add elements from/to the array.
//R- The returned value must be a string, and have "***" between each of its letters
//E- twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' 

function twoSort(s) {
    let sorted = s.sort()
    let starred = sorted[0].split('')
    // for(i=0;i<starred.length-1;i++){
    //     starred[i]=starred[i].concat('***')
    // }
    console.log(starred.join('***'))
}





twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' 
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'