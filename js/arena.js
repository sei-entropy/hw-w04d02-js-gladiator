import Gladiator from "./gladiator.js";

export default class Arena{
    constructor(name, gladiators){
        this.name= name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators= [];

    }
    addGladiator(Gladiator){
        if (this.gladiators.length < 2)
         this.gladiators.push(Gladiator);
        
    }

    fight(){
      
          if (this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Spear") 
             { `${this.gladiators[0].weapon} Beates ${this.gladiators[1].weapon}`
             this.gladiators.pop();}

        else if (this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Club") 
             { `${this.gladiators[1].weapon} Beates ${this.gladiators[0].weapon}`
             this.gladiators.shift();}

         else if (this.gladiators[0].weapon === "Club" && this.gladiators[1].weapon === "Trident")
               {`${this.gladiators[0].weapon} Beates ${this.gladiators[1].weapon}`
               this.gladiators.pop();}

        else if (this.gladiators[0].weapon === "Club" && this.gladiators[1].weapon === "Spear")
               {`${this.gladiators[0].weapon} Beates ${this.gladiators[1].weapon}`
               this.gladiators.pop();}

         else if (this.gladiators[0].weapon === "Spear" && this.gladiators[1].weapon === "Trident")
               {`${this.gladiators[1].weapon} Beates ${this.gladiators[0].weapon}`
               this.gladiators.shift();}

        else if (this.gladiators[0].weapon === "Spear" && this.gladiators[1].weapon === "Club")
               {`${this.gladiators[0].weapon} Beates ${this.gladiators[1].weapon}`
               this.gladiators.pop();}



        else if ((this.gladiators[0].weapon === "Trident" &&this.gladiators[1].weapon === "Trident")||
                 (this.gladiators[0].weapon === "Spear" && this.gladiators[1].weapon === "Spear") ||
                 (this.gladiators[0].weapon === "Club" && this.gladiators[1].weapon === "Club"))
           {   
            
               this.gladiators.pop();
               this.gladiators.pop();
                  
              
            }
        

    }
}

