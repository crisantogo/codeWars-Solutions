//Trim a string

function trim(str, size) {
    // Clear out that junk in your trunk
    console.log(str.length)
    if(size>=str.length){
        console.log(str)
    }else if(size<=3){
        console.log(`${str.slice(0,size)}`+ "...")
    }else{
        console.log(`${str.slice(0,size-3)}`+ "...")
    }

    
}