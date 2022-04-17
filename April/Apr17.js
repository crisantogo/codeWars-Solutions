// P-Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
// R-("1", "22") --> "1221"
// E-solution("22", "1") --> "1221"
// P-

function solution(a, b){
    // your code here
    if (a.length>b.length){
        console.log(b+a+b)
    }else
    console.log(a+b+a)
  }
  solution("2","12")