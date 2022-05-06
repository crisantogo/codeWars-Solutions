// String.prototype.toJadenCase = function () {
//     //...
//   };

 function toJadenCase(str){
    let jadenCase=str.split(" ").map(word=>word.replace(word[0],word[0].toUpperCase())).join(" ")
    console.log(jadenCase)
  }

toJadenCase("How can mirrors be real if our eyes aren't real")