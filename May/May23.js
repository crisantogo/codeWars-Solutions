//P- Given 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), 
//number	           price (cents)
// n < 5	            100
// n >= 5 and n < 10	 95
// n >= 10	             90
//R- return a number that the customer need to pay how much money. 
//E- saleHotdogs(1)=>100
//P-

function saleHotdogs(n){
    console.log((n<5?100:n>=5 && n<10?95:90)*n) 
  }

saleHotdogs(1) //100
saleHotdogs(4) //400
saleHotdogs(5) //475
saleHotdogs(9) //855
saleHotdogs(10) //900
saleHotdogs(100) //9000