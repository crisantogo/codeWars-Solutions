//P- Given the number of blocks, First place is the highest and second place is higher than third. Number of blocks is no less than 6. Is the parameter 'blocks' a number, a string or an array?All platforms have heights greater than zero.
//R- Return an Array ordered [2nd, 1st, 3rd]
//E- 11 -> [4, 5, 2]
//P- 

function racePodium(blocks) {
    // your code here
    let second = Math.ceil(blocks/3)
    let first = second + 1
    let third = blocks - (first + second)
    if(third==0){
        third=1
        second=second-1
    }
    console.log([second,first,third])
  }

racePodium(11)
racePodium(7)
racePodium(1000000)