//makeBackronym

var makeBackronym = function(string){
    //your code here
    let backronym=[]
    string.split('').map(l=>backronym.push(dict[l.toUpperCase()]))
    return backronym.join(' ')
};