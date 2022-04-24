// P- Remove every other element from an array
// R- Return kept elements
// E- ['Hello', 'Goodbye','Hello, again']=>['Hello','Hello, again']
// P-

function removeEveryOther(arr){
    //your code here
    console.log(arr.filter((e,i)=> i%2==0))
}


removeEveryOther(['Hello', 'Goodbye','Hello, again']) //['Hello','Hello,again']
removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])//['Keep','Keep','Keep']