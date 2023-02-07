// Given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

//Create variables 
//Split string
//Use .map() method to iterate over split String
//Check for type
//Return as an array

function solve(s){
    //..
    let uppercase=0,
        lowercase=0,
        numbers=0,
        special=0

    s.split('').map(l=>{
        if(l.charCodeAt(0)>64 && l.charCodeAt(0)<91){
            uppercase+=1
        }else if(l.charCodeAt(0)>96 && l.charCodeAt(0)<123){
            lowercase+=1
        }else if(l.charCodeAt(0)>47 && l.charCodeAt(0)<58){
            numbers+=1
        }else special+=1
    })

    console.log([uppercase,lowercase,numbers,special])
        
}

solve("Codewars@codewars123.com"),[1,18,3,2]