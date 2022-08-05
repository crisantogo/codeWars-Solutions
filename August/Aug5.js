//P- Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//R- A String
//E- switcheroo('abc'), 'bac'
//P- 

function switcheroo(x){
    let switched = []
    x=x.split('')
    x.map(e=>{
        switch(e){
            case 'a':
                switched.push('b');
                break;
            case 'b':
                switched.push('a')
                break;
            default:
                switched.push('c')
        }
    })
    console.log(switched.join(''))
    
    //CodeWars solution be like...
    //return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('')
}

switcheroo('abc') //'bac'
switcheroo('aaabcccbaaa') //'bbbacccabbb'
switcheroo('ccccc') //'ccccc'