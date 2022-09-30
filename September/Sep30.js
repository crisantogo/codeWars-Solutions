//P- Given a String, determine the cost to have the String printed. Each character cost $30. Spaces count as characters.
//R- A Number
//E- billboard("Jeong-Ho Aristotelis"), 600

function billboard(name, price = 30){
    let multiply=0
    name=name.length
    for(i=0;i<price;i++){
        multiply+=name
    }
    console.log(multiply)
} 

billboard("Jeong-Ho Aristotelis"), 600
billboard("Abishai Charalampos"), 570