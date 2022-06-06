//P- Find the index of the vowels in a given word. Vowels consist of a,e,i,o,u and y
//R- Return an array. 
// - Array index starts 1
//E- Mmmm  => []
// - Super => [2,4]
// - Apple => [1,5]
// - YoMama=> [1,2,4,6]
//P- Create a function that accepts a String as a parameter
// - Use String.padStart() to place an additional character so that the word index starts at 1. Character must not be a vowel
// - Create a variable  with an empty array as its value
// - Use the .split() method to turn word into an array
// - Use the .map() method to loop through the word array and push the index of the vowels to the variable with the empty array. 

function vowelIndices(word){
    //your code here
    let result= []
    let secWord= word.padStart(word.length+1,"x").toLowerCase()
    secWord.split('').map((letter,index)=>{
         if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'||letter=='y'){
            result.push(index)
         }
     })
     console.log(result)
    }


vowelIndices("mmm")   //[]
vowelIndices("apple") //[1,5]
vowelIndices("super") //[2,4]
vowelIndices("orange")//[1,3,6]