// Write a program that outputs the top n elements from a list.


function largest(n, array) {
    // Find the n highest elements in a list
    let largest=[]
    array=array.sort((a,b)=>b-a)
    console.log(array)
    for(i=n-1;i>=0;i--){
        largest.push(array[i])
    }
    console.log(largest)
}




// Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]), [-1, 0]