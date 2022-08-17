//P- Given a parameter 'text' and another 'char', mutate the first parameter so that the entire text is the now the char. There will never be a case when both are empty as nothing is going on!!
//R- A String. If the text or the character are empty, return an empty string.
//E- contamination("abc","z"), "zzz"
//P-

function contamination(text, char){
    // Code here ;)
    let nuTxt=[]
    text= text.split('').map(element => nuTxt.push(char))
    console.log(nuTxt.join(''))

    //CodeWars solution(s)

    // function contamination(text, char) {
    //     return text.split("").fill(char).join("");
    //   }

    // function contamination(text, char) {
    //     return char.repeat(text.length);
    //   }


}


contamination("abc","z"), "zzz"
contamination("","z"), ""
contamination("abc",""), ""
contamination("_3ebzgh4","&"), "&&&&&&&&"
