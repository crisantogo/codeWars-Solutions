//P- Given the value 'n' where 'n' is the number of students in a class and 'm' where 'm' is the number of pages each student needs to complete their assignment. Calculate the total number of pages. 
//R- return a Number. If n < 0 or m < 0 return 0
//E- n= 5, m=5: 25
//P-

function paperwork(n, m) {
    if(n<0 || m<0){
      return 0
    }else return m*n
    //return n<0||m<0 ? 0 : m*n
  }

paperwork(5,5), 25
paperwork(5,-5), 0