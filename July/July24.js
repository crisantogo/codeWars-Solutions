//P- Given an array and a limit value. Check that all values in the array are below or equal to the limit value. Assume all values in the array are numbers
//R- A Boolean
//E- smallEnough([66, 101], 200), true

function smallEnough(a, limit){
    let ax=[]
    a=a.map(num=>{if(num>limit){
        ax.push(num)
    }})
    console.log(ax.length>0?false:true)
    //codewars solution using spread syntax
    //return Math.max(...a) <= limit
}

smallEnough([66, 101], 200) //true
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) //false
smallEnough([101, 45, 75, 105, 99, 107], 107) //true
