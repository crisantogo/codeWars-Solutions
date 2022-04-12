// Write a function that will check if two given characters are the same case.


//P- function that check if two characters are the same case. Is it an array?Compare two parameters?
//R- If any of characters is not a letter, return -1, If both characters are the same case, return 1, If both characters are letters and not the same case, return 0
//E- 

//P-create a function to compare to variables

function compTwoVari(var1,var2){
    if(var1.toLowerCase()===var1.toUpperCase()||var2.toLowerCase()===var2.toUpperCase()){
        return -1
    }else if(var1===var1.toLowerCase()&&var2===var2.toLowerCase()||var1===var1.toUpperCase()&&var2===var2.toUpperCase()){
        return 1
    }else{
        return 0
    }
}

console.log(compTwoVari('a','g')) //returns 1
console.log(compTwoVari('A','C')) //returns 1
console.log(compTwoVari('b','G')) //returns 0
console.log(compTwoVari('B','g')) //returns 0
console.log(compTwoVari('0','?')) //returns -1