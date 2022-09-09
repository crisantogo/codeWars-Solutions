//P- Write a function that produces an array with the numbers 0 to N-1 in it.
//R- An Array
//E- arr(5) => [0,1,2,3,4]

const arr = N => {
    let newarr=[]
    for(i=0;i<N;i++){
        newarr.push(i)
    }
    console.log(newarr)
};

arr(5) // => [0,1,2,3,4]
arr(4) // => [0,1,2,3]
arr()