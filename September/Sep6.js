//P- Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//R- A String
//E- removeExclamationMarks("Hello World!"), "Hello World"
//P-

function removeExclamationMarks(s) {
    let nustring=[]
    s=s.split('').map(e=>{
        if(e==='!'){
            return e
        }else
        nustring.push(e)
    })
    console.log(nustring.join(''))
    
    //codeWars solution;
    // return s.split('!').join('')
}


removeExclamationMarks("Hello World!"), "Hello World"
removeExclamationMarks("Hello World!!!"), "Hello World"
