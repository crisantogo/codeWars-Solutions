// Define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

class Hero{
    constructor(name="Hero",position,health,damage,experience){
      this.name=name;
      this.position=position;
      this.health=health;
      this.damage=damage;
      this.experience=experience
    }
  }

const myHero=new Hero("Hero", '00', 100, 5, 0)

console.log(myHero.damage)