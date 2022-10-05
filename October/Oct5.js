//P- Given a=1...z=26, write a function which calculates the value of a word based off the sum of the alphabet positions of its characters. The input will always be made of only lowercase letters and will never be empty.
//R- A Number
//E- l + o + v + e = 54

let alphabet={
    'a': 1 ,
    'b': 2 ,
    'c': 3 ,
    'd': 4 ,
    'e': 5 ,
    'f': 6 ,
    'g': 7 ,
    'h': 8 ,
    'i': 9 ,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
}

function wordsToMarks(string){
    //your code here
    let nums = []
    string=string.split('').map(el=>nums.push(alphabet[el]))
    nums=nums.reduce((a,b)=>a+b,0)
    console.log(nums)
}

wordsToMarks("attitude"), 100
wordsToMarks("friends"), 75
wordsToMarks("family"), 66