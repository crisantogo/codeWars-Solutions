// P- Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. String will never be empty
// R- Return the resulting string.
// E- fakeBin('45385593107843568')=> '01011110001100111'
// P- Create a function that accepts the argument of a String of numbers. 
//  - Use the split method to turn string into an array.
//  - Use map mehtod to create a new array. Map thru each number returning either 0 or 1
//  - Use join method to turn array to a string

function fakeBin(x){
    console.log(x.split('').map(num=>num>=5?1:0).join(''))
}




fakeBin('45385593107843568') //'01011110001100111'
fakeBin('509321967506747') //'101000111101101'