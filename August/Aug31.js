//P- Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string. Don't worry about uppercase vowels, y is not considered a vowel.
//R- A String
//E- "hello"     -->  "hll"
// - "codewars"  -->  "cdwrs"
// - "goodbye"   -->  "gdby"
// - "HELLO"     -->  "HELLO" 

function shortcut (string) {
    //return '';
    let noVows=[]
    string.split('').map(e=>{
        if(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'){
            return e
        }else noVows.push(e)
    })
    console.log(noVows.join(''))
}

shortcut('hello')
shortcut('codewars')
shortcut('goodbye')
shortcut('HELLO')