function getCount(str) {
    let vowelsCount = str.split('').filter(e=>{
        if(e ==='a'||e==='e'||e==='i'||e==='o'||e==='u'){
            return e
        }
    });
    // enter your magic here
    
    
    console.log(vowelsCount.length);
  }

  getCount("abracadabra") //5