//P- given an array with positive numbers and a non-negative number N. Find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1
//R- A number
//E- array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9
//P-


function index(array, n){
    //your code here
    if(array[n]!==undefined){
        console.log(array[n]**n)
    }else 
    console.log(-1)
  }


index([1, 2, 3, 4],2) //9
index([1, 3, 10, 100], 3) //1000000
index([1, 2],3) // -1