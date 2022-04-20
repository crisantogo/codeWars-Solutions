// P- write a function that determine the number of magazines that every soldier has to have in his bag. You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Below there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
// Return- numberOfMags=== integer
// E- ["PT92", 6] => 2 (6 streets 3 bullets each)
    //["M4A1", 6] => 1
// P-create an object for weapons, create a function with conditionals for each weapon and equations to calculate numberOfMags. 

function magNumber(info){
    const weaponOfChoice = {
        PT92 : 17,
        M4A1 : 30,
        M16A2 : 30,
        PSG1 : 5
    }
    let weapon = info[0]
    let numOfRounds = info[1] * 3
    console.log(Math.ceil(numOfRounds/weaponOfChoice[weapon]))
    //console.log(weaponOfChoice['PT92'])
}

magNumber(['PT92',6])
magNumber(["M4A1", 6])