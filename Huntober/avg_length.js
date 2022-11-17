//Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array. If the average length is not an integer, use Math.round(). The input array's length > 1

function averageLength(arr) { 
    // good luck
    let individualLetter=arr.map(l=>l.charAt(0))
    let avg = Math.round(arr.map(str=>str.length).reduce((a,b)=>a+b,0)/arr.length)
    let newArr= individualLetter.map(e=>e.repeat(avg))
    console.log(newArr)

    //Refactored;
    //return arr.map(e=>e.charAt(0).repeat(avg))
}

averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']
