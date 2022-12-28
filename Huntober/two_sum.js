//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr,sum){
  const pairs = []
  const nums = {}

  for(const num1 of arr){
    const num2 = sum - num1 //for each iteration num 2 is created from the equation
    if(nums[num2]){         
      pairs.push([num1,num2])
    }else{
      nums[num1] = 1
    }
  }
  console.log(pairs)
}

twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]