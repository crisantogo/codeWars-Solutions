// Given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces.

function dup(s) {
    //..
    s=s.map(word=>word.split('').filter((l,i,arr)=>l != arr[i-1]))
    console.log(s.map(arr=>arr.join('')))
};

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']