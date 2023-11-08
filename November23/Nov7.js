//P- Create a function that filters a list of strings and returns a list with only names containing 4 letters. Names must be returned in the order they appear
//R- An Array containing string(s)
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//P

function friend(friends){
    //your code here
    console.log(friends.filter((string)=>string.length<=4))
}

friend(["Ryan", "Kieran", "Mark"]) //["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) //["Ryan"]