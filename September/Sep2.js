//P- Create a function which answers the question "Are you playing banjo?".
// - If your name starts with the letter "R" or lower case "r", you are playing banjo!
// - The function takes a name as its only argument. Names given are always valid strings.
//R- A String, name + " plays banjo" 
// -           name + " does not play banjo"
//E- areYouPlayingBanjo("Adam"), "Adam does not play banjo"


function areYouPlayingBanjo(name) {
    // Implement me
    let player=name.charAt(0).toLowerCase()=='r'?`${name} plays banjo`:`${name} does not play banjo`
    console.log(player)
}

areYouPlayingBanjo("Adam"), "Adam does not play banjo"
areYouPlayingBanjo("Ringo"), "Ringo plays banjo"