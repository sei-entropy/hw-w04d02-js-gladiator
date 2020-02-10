export default class Arena{
    constructor(name){
        this.name = name.toUpperCase();
        this.gladiators = [];
    }
    addGladiator(gladiators){
       
       
        this.gladiators.push(gladiators);
        this.gladiators.length = Math.min(this.gladiators.length,2);
       
    }
    fight(){
        
            if(this.gladiators[0].weapon ==  this.gladiators[1].weapon )
            {
                console.log("tie");
                this.gladiators = [];
            }else if(this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear"  ) {
                this.gladiators.pop();
            }else if(this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club"  ) {
                this.gladiators.pop();
            }
            else if(this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident"  ) {
                this.gladiators.pop();
            }
            else if(this.gladiators[1].weapon == "Trident" && this.gladiators[0].weapon == "Spear"  ) {
                this.gladiators= this.gladiators[1];
            }else if(this.gladiators[1].weapon == "Spear" && this.gladiators[0].weapon == "Club"  ) {
                this.gladiators= this.gladiators[1];
            }else if(this.gladiators[1].weapon == "Club" && this.gladiators[0].weapon == "Trident"  ) {
                this.gladiators= this.gladiators[1];
            }
        
    }
}