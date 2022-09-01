//P- Given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value
//R- A String
//E- "1,2,3"      =>  "2"
// - "1,2,3,4"    =>  "2 3"
// - "1,2,3,4,5"  =>  "2 3 4"
// - ""     =>  NULL
// - "1"    =>  NULL
// - "1,2"  =>  NULL
//P- Split String, pop & unshift Array elements, write conditional for NULL, join by black spaces instead of commas

function array(arr){
    //Good luck
    if(arr.split(',').length>2){
        arr= arr.split(',')
        arr= arr.slice(1,arr.length-1)
        console.log(arr.join(' '))
    }else if(arr.split(',').length<=2){
      console.log(null)
    }    
}

array('1,2,3'), '2'
array('1,2,3,4'), '2 3'
array('1,2,3,4,5'), '2 3 4'
array(''), null