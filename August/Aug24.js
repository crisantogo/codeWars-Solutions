//P- Write a function capitalize() which capitalizes the first letter (if any) of the given string.
//R- A String
//E- string-->String
//P-

String.prototype.capitalize= function(){
    let nustring=this.split('')
    nustring.splice(0,1,nustring[0].toUpperCase())
    console.log(nustring.join(''))
}

'string'.capitalize()

// function capitalize(string){
//     let nustring=string.split('')
//     nustring.splice(0,1,nustring[0].toUpperCase())
//     console.log(nustring.join(''))
// }

// capitalize('string')