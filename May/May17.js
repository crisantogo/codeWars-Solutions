//P- Given a number and have to make it negative. The number can be negative already, in which case no change is required. Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. Is the input always a number or is it sometimes a string? 
//R- A negative number.
//E- 
//P-

function makeNegative(num) {
    // Code?
    return -Math.abs(num)
  }




makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12