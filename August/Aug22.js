//P- Create a method to see whether the string is ALL CAPS. Will the String ever be a 'number'?
//R- A Boolean
//E- 'c'.isUpperCase(), false
//P-

String.prototype.isUpperCase = function() {
    // your code here
    console.log(this.toUpperCase()==this)
  }

'c'.isUpperCase(), false
'C'.isUpperCase(), true
'hello I AM DONALD'.isUpperCase(), false
'HELLO I AM DONALD'.isUpperCase(), true
'123'.isUpperCase(), true