//P- Create a class that accpets 'color', 'flavor','baryon_number' and method '.interact()' where 'interact()' causes two obejects to exchange 'color'.
//R- A class that creates Objects
//E- 
//P-

class Quark{
    // Your code here.
    constructor(color,flavor,baryon_number){
      this.color=color;
      this.flavor=flavor;
      this.baryon_number=1/3
    }
    interact(obj){
        const color1 = obj.color;
        const color2 = this.color;
        this.color = color1;
        obj.color = color2;
    }
}