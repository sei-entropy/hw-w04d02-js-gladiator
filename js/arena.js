 export default class Arena {
     constructor(name) {

         this.name = name.charAt(0).toUpperCase() + name.slice(1)
         this.gladiators = []
     }
     addGladiator(gladiator) {
         if (this.gladiators.length == 2) {
             return console.log('Max Number of Gladiators in Arena ')
         } else this.gladiators.push(gladiator)
     }
     fight() {
         if (this.gladiators.length == 2) {
             let firstFighter = this.gladiators[0].weapon
             let secondFighter = this.gladiators[1].weapon
             if (firstFighter == secondFighter) return console.log("Both eliminated")
             else {
                 if (firstFighter == 'Spear' && secondFighter == "Club") 
                 return console.log(this.gladiators[0].name + "is Victroious")
                 else if (firstFighter == 'Club' && secondFighter == "Trident") 
                 return console.log(this.gladiators[0].name + "is Victroious")
                 else if (firstFighter == 'Trident' && secondFighter == "Spear") 
                 return console.log(this.gladiators[0].name + "is Victroious")
                 else 
                 return console.log(this.gladiators[1].name + "is Victroious")

             }
         }
     }
 }