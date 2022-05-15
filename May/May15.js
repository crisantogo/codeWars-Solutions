//P- Find the greatest common divisor of two positive integers. The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
//R- The largest multiple that can go into the given number x and y
//E- mygcd(30,12)=> 6
//P-

function mygcd(x,y){
    //your code here
    while(y) {
        let t = y;
        y = x % y;
        x = t;
      }
      console.log (x);
  }





mygcd(30,12) //6
mygcd(8,9) //1
mygcd(1,1) //1