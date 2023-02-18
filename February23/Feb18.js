// Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
    txt=txt.split('').map(l=>{
        if(l==='a' || l==='A'){
           return l='4'
        }else if(l==='e' || l==='E'){
            return l='3'
        }else if(l==='l' || l==='L'){
            return l='1'
        }else return l
    }).join('')

    console.log(txt)
}

nerdify("Fund4m3nt41s"),"Fund4m3nt41s"
nerdify("Los Angeles"),"Los 4ng313s"