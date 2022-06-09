//P- Sum all the numbers of a given array, except the highest and the lowest element ( by value, not by index! )
//R- A number or 0 if Array contains 2 elements or less
//E- { 6, 2, 1, 8, 10 } => 16
// - { 1, 1, 11, 2, 3 } => 6
//P- Write a function that accepts an Array as a parameter
// - Use the .sort() method to sort Array in ascending order
// - Use .slice() method to extract numbers excluding the first and last element of the sorted Array
// - Use .reduce() method to find the total of the extracted numbers

function sumArray(array) {
    let sum=array.sort((a,b)=> a-b).slice(1,array.length-1).reduce((acc,c)=>acc + c,0)
    if(array===null||array.length<=2){
        console.log(0)
      }else 
      console.log(sum)
      
      
}
sumArray([ 6, 2, 1, 8, 10 ])       //16
sumArray([ 0, 1, 6, 10, 10 ])      //17
sumArray([ 3, 5 ])                 //0
sumArray([ ])                      //0 