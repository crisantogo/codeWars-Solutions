//P- write a function maskify, which changes all but the last four characters into '#'. Is it a String? Is it a Number? Is it a Number as a String? Are spaces included to be made into '#'? Are any empty Strings?
//R- A String with only the last 4 characters visible. Spaces & special characters are to be made into '#'. If String is empty return an empty String.
//E- "4556364607935616" --> "############5616"
// - "64607935616" -->      "#######5616"
// - "1" -->                "1"
// - "" -->                 ""
// - "Skippy" --> "##ippy"
// - "Nananananananananananananananana Batman!" --> "####################################man!"
//P- 

// return masked string
function maskify(cc) {
    cc='#'.repeat(Math.max(0, cc.length-4)) + cc.substr(-4)
    console.log(cc)
}

maskify('4556364607935616'), '############5616'
maskify("Nananananananananananananananana Batman!"), "####################################man!"