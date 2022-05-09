//P- find the first element of an array that is not consecutive.
//R- the non consecutive element
//E- [1,2,3,4,6,7,8] => 6
//P-

function firstNonConsecutive (arr) {
        for (i = 0; i <arr.length-1; i++){
        if(arr[i+1] !== arr[i]+1){
          console.log(arr[i+1])
        }
    }        
}

firstNonConsecutive([1,2,3,4,6,7,8]) //6
firstNonConsecutive([1,2,3,4])
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.length)
// for (i=1; i<= arr.length;i++){
//     console.log(i)
// }