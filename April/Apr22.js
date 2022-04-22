// P-Determine catYears & dogYears based on the number of humanYears. 
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// R- An array of  [humanYears,catYears,dogYears]
// E- humanYearsCatYearsDogYears(1) => [1,15,15]
// P-

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let ageEquivalent=[]
    if (humanYears===1){
        ageEquivalent.push(1,15,15)
        console.log(ageEquivalent)
    }else if (humanYears === 2){
        ageEquivalent.push(humanYears,(humanYears+22),(humanYears+22))
        console.log(ageEquivalent)
    }else if(humanYears>2){
        let catYears=((humanYears-2)*4)+24
        let dogYears=((humanYears-2)*5)+24
        ageEquivalent.push(humanYears,catYears,dogYears)
        console.log(ageEquivalent)
    }
    
  }
  humanYearsCatYearsDogYears(1) //[1,15,15]
  humanYearsCatYearsDogYears(2) //[2,24,24]
  humanYearsCatYearsDogYears(10) //[10,56,64]
