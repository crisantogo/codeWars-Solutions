// P- Write a function that returns a string in which firstname is swapped with last name.
// R- nameShuffler('john McClane'); => "McClane john"
// E- nameShuffler('john McClane'); => "McClane john"
// P-

function nameSuffle(str){
    var arr = str.split(' ').reverse().join(' ');
    // console.log( arr[1] + ' ' + arr[0])
    console.log(arr)
  }

nameSuffle('john McClane')