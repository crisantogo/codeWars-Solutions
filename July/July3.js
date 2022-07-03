//P- You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//R- Your task is to return number of people who are still in the bus after the last bus station (after the last array).
//E- number([[10,0],[3,5],[5,8]]),5
//P- Loop through the Array
// - Add together the first elements of each nested Array.
// - Add together the second elements of each nested Array.
// - Minus the total of the first from the total of the second.

var number = function(busStops){
    // Good Luck!
    let totalPplOn=[]
    let totalPplOff=[]
    for(i=0;i<busStops.length; i++){
        totalPplOn.push(busStops[i][0])
        totalPplOff.push(busStops[i][1])
    }
    let remainder=(totalPplOn.reduce((acc,c)=>acc+c))-(totalPplOff.reduce((acc,c)=>acc+c))
    return remainder
    //Codewars solution
    //const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)
  }

number([[10,0],[3,5],[5,8]]) //5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) //17