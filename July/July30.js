//P- Check provided Array for 'good' or 'bad'. Is the Array provided Strings only? Are the Strings in the Array only, either 'good' or 'bad'? Do I have to test based on case sensitivity?
//R- If there are one or two 'good', return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no 'good' , as is often the case, return 'Fail!'.
//E- well(['bad', 'bad', 'bad']), 'Fail!'
//P-

function well(x){
    let goodOnes=[]
    x.map(e=>{if(e==='good'){
        goodOnes.push(e)
    }})
    if(goodOnes.length>=1 && goodOnes.length<=2){
        console.log('Publish!')
    }else if(goodOnes.length>2){
        console.log('I smell a series!')
    }else if(goodOnes.length===0){
        console.log('Fail!')
    }
    //codeWars solution;
    
    // const well = x => {
    //     const good_count = x.filter(x => x == 'good').length;
    //     return good_count < 1 ? 'Fail!' : 
    //            good_count < 3 ? 'Publish!' : 'I smell a series!';
    //   }
}





well(['bad', 'bad', 'bad']), 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'