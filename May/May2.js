// P- Take a string as an argument for the function toFreud
// R- Return a string with every word replced with "sex"
// E- toFreud("This is a test")=> "sex sex sex sex"
// P-

function toFreud(string) {
    if (string===""){
        return ""
      }
    let result = string.split(' ')
    for(i=0; i<=result.length-1;i++){
        result[i]= "sex"
       
    }
    console.log(result.join(' '))
}

toFreud("This is a test")//"sex sex sex sex"
