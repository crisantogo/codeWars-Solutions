// Given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
    let arr=[0,1]
    for(i=2; i<=n; i++){
        arr[i]=arr[i-1] + arr[i-2]
    }
    console.log(arr[n-1])
}

nthFibo(4), 2