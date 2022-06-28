//P- A Wolf in Sheep's Clothing. The Array will always contain at least 1 wolf. Would the Array contain more than 1 wolf? Will the Array contain ONLY sheep/wolf? Does the Array contain ONLY Strings? The last element in the Array is no. 1
//R- If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//E- Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//   Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

//   Input: ["sheep", "sheep", "wolf"]
//   Output: "Pls go away and stop eating my sheep"

//P- Create a function that accepts an Array as a parameter
// - Reverse the Array.
// - Add an element x to the Array so that the original elements start at 1 instead of 0
// - Loop through the Array to find the String of "wolf"
// - Return String that matches the wolf's position

function warnTheSheep(queue) {
    // let orderedQueue = queue.reverse();  
    //     if (orderedQueue[0] === "wolf") 
    //         console.log("Pls go away and stop eating my sheep");
    //     else
    //         console.log(`Oi! Sheep number ${orderedQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`) 
    
    //My Solution,
    queue= queue.reverse()
    queue.unshift('x')
    queue.map((flock, index, array)=> {
        if(flock==='wolf' && flock===array[1]){
            console.log('Pls go away and stop eating my sheep')
        }else if(flock==='wolf'){
            let sheepNum=`Oi! Sheep number ${index - 1}! You are about to be eaten by a wolf!`
            console.log(sheepNum)
        }
    })
   //console.log(queue) 
    
}

warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]) //"Oi! Sheep number 2! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) //"Oi! Sheep number 5! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "sheep", "wolf"]) //"Pls go away and stop eating my sheep"