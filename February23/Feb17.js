//Write a function, which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
//Do not modify the input.

//Examples;
//keepOrder([1, 2, 3, 4, 7], 5), 4
//keepOrder([1, 2, 3, 4, 7], 0), 0

function keepOrder(ary, val) {
    // your code here
    if(val>ary[ary.length-1]){
        console.log(ary.lastIndexOf(ary[ary.length-1]) + 1)
    }

    for(i=0;i<ary.length;i++){
        if(ary[i]>=val){
            console.log(ary.indexOf(ary[i]))
            break
        }
    }

    //Codewars solution;
    //return ary.filter(a => a < val).length;

}


keepOrder([1, 2, 3, 4, 7], 5), 4
keepOrder([1, 2, 3, 4, 7], 0), 0
keepOrder([1, 1, 2, 2, 2], 2), 2
keepOrder([1, 2, 3, 4], 5), 4
keepOrder([-3, -2, -1, 0, 2, 4, 4, 4, 4], 6), 9