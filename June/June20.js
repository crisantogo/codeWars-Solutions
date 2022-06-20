// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// P- Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// R- True or False
// E- lovefunc(1,4), true
// P- 

function lovefunc(flower1, flower2){
    // moment of truth
    function lovefunc(flower1, flower2){
        // moment of truth
        if((flower1 % 2 ==0)&&(flower2 % 2 !=0)||(flower1%2!=0)&&(flower2%2==0)){
          return true
        }else return false
      }
      //codeWars solution
      //return flower1 % 2 !== flower2 % 2;
  }



lovefunc(1,4) //true