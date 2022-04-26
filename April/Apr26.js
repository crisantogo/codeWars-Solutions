// P- From a string remove numbers,include spaces and special characters 
// R- return a string with spacing and special characters
// E- '! !' -> '! !'
//    '123456789'           -> ''
//    'This looks5 grea8t!' -> 'This looks great!'
// P-

function stringClean(s){
    // Function will return the cleaned string
    const withoutNumbers = s.replace(/\d+/g, '')
    console.log(withoutNumbers)
  }

  stringClean('This looks5 grea8t!')//'This looks great!'
  stringClean('123456789')
  stringClean('!!')