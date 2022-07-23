//P- Check to see if a string has the same amount of 'x's and 'o's. It is case sensitive. The string can contain any character.
//R- Return a boolean
//E- XO('xo'),true
//P- Create a function that accepts a String as a parameter.
// - Use .split() method on string
// - Create two variables whose values are empty array. One for x's and one for o's
// - Loop through split array and push x's to one array and o's to the other.
// - Count the number of elements in each new array. If no. of elements are equal, resolves to true, else false

function XO(str) {
    //code here
    let xs = [],
        os = []
    str=str.split('')
    str.map(xo=>{
        if(xo=='o'||xo=='o'.toUpperCase()){
            os.push(xo)
        }else if(xo=='x'||xo=='x'.toUpperCase()){
            xs.push(xo)
        }
    })
    console.log(xs.length==os.length?true:false) 
    //codewars solution
    //return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length  
}

XO('xo') //true
XO("xxOo") //true
XO("xxxm") //false
XO("Oo") //false
XO("ooom") //false