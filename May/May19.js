//P- Write a function howMuchWater to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load and clothes.For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.
//R- Amount of water rounded to 2 decimal places. Or a String if 'Too much clothes' or a String if 'Not enough clothes'
//E- howMuchWater(10,10,21), 'Too much clothes'
//P- 



function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    if (clothes> 2*load){
        console.log ('Too much clothes')
      }else if(clothes<load){
        console.log('Not enough clothes')
      }else 
        console.log(+(water*1.1**(clothes-load)).toFixed(2))
  }

  howMuchWater(10,10,21) //'Too much clothes'
  howMuchWater(10,10,2) // 'Not enough clothes'
  howMuchWater(10,11,20) // 23.58