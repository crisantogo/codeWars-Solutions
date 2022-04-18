// P- make the first character in the string "word" upper case
// R- 
// E- capitalizeWord('word')=> 'Word'
// P-

function capitalizeWord(word){
    console.log(word[0].toUpperCase()+ word.slice(1))
}
capitalizeWord('hello world')