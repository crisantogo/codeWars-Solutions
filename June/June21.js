// Begin with writing a generic Ship class / constructor:
// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!
// Add the method .isWorthIt to decide if the ship is worthy to loot. For example:
// titanic.isWorthIt() => return false

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt=function(){
        if(draft>(crew*1.5)){
            return true
        }else return false
    }
   }