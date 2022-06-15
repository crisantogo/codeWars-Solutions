//Replace all the dots . in the specified String str with dashes -

var replaceDots = function(str) {
    console.log(str.replaceAll('.', '-'));
    //With regex
    //return str.replace(/[.]/g, '-')
  }


replaceDots("one.two.three")