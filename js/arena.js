 'strict mode'
 
 export default class Arena {
     constructor(name , gladiators = []) {

         this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
         this.gladiators = []
     }
     addGladiator(gladiator) {
         if (this.gladiators.length < 2) {
            this.gladiators.push(gladiator);
     };}

 
     

     fight() {
         if (this.gladiators.length == 2) {
             let firstFighter = this.gladiators[0].weapon
             let secondFighter = this.gladiators[1].weapon
             if (firstFighter == secondFighter) return console.log("Both eliminated")
             else {
                 if (firstFighter == 'Spear' && secondFighter == "Club") 
                 return this.gladiators.pop() + console.log(this.gladiators[0].name + "is Winner!")
                 else if (firstFighter == 'Club' && secondFighter == "Trident") 
                 return this.gladiators.pop() + console.log(this.gladiators[0].name + "is Winner!")
                 else if (firstFighter == 'Trident' && secondFighter == "Spear") 
                 return this.gladiators.pop()+ console.log(this.gladiators[0].name + "is Winner")
                 else 
                 return console.log(this.gladiators[1].name + "is Winner!") + this.gladiators.shift();

             }
         }
     }
 }