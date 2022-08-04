//P- Given an array of Player objects and an index (1-based), return the name of the chosen Player. Are all values in the Array a string? Is it a number?
//R- A String 
//E- duck_duck_goose([a, b, c, d], 1) => "a"


function duckDuckGoose(players, goose) {
    // ...
    console.log(players[goose-1])
  }



duckDuckGoose(["a", "b", "c", "d"], 1)