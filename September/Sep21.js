//You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

// Add rooms here
class EscapeRoom{
    constructor(name, description, completed){
      this.name=name;
      this.description=description;
      this.completed=completed;
    }
  }
  
  var rooms = {
    bedroom: new EscapeRoom('bedroom', 'where the magic happens', true),
    kitchen: new EscapeRoom('kitchen', 'just an ordinary kitchen or is it?', true),
    bathroom: new EscapeRoom('bathroom', 'dropping the kids off at the pool', false)
  }