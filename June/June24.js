//P- Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
//R- A Number. If the two numbers are equal return a or b.
//E- (1, 0) --> 1 (1 + 0 = 1)
//   (1, 2) --> 3 (1 + 2 = 3)
//   (0, 1) --> 1 (0 + 1 = 1)
//   (1, 1) --> 1 (1 since both are same)
//   (-1, 0) --> -1 (-1 + 0 = -1)
//   (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P-

function getSum( a,b ){
    let sum= 0
    if(a != b && a<b){
        for(i=a;i<=b;i++){
            sum+=i
        }console.log(sum)
    }else if(a !=b && a>b){
        for(i=b;i<=a;i++){
            sum+=i
        }console.log(sum)
    }else if(a==b){
        console.log(a)

    }
}
getSum(0,-1)  //--> -1
getSum(1, 0)  //-->  1 (1 + 0 = 1)
getSum(1, 2)  //-->  3 (1 + 2 = 3)
getSum(0, 1)  //-->  1 (0 + 1 = 1)
getSum(1, 1)  //-->  1 (1 since both are same)
getSum(-1, 0) //--> -1 (-1 + 0 = -1)
getSum(-1, 2) //-->  2 (-1 + 0 + 1 + 2 = 2)