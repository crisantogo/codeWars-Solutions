//P- You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. Complete the function that takes a string as an argument representing the current state of the light.
//R- Returns a string representing the state the light should change to.
//E- When the input is green, output should be yellow.

function updateLight(current) {
    //your code here!
    switch (current) {
        case "green":
            console.log("yellow")
            break;
        case "yellow":
            console.log("red")
            break;
        default:
            console.log("green")
    }
}

updateLight("green"), "yellow"
updateLight("yellow"), "red"
updateLight("red"), "green"