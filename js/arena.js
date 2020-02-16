export default class Arena {
    constructor(name){
      this.name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
       this.gladiators = []
    }
  
    addGladiator(gladiator){
      if(this.gladiators.length < 2){
        this.gladiators.push(gladiator)
      } 
      else {
        console.log("never have more than 2 gladiators in it at a time")
       }
    }

    fight(){
      const [gladiator1, gladiator2] = this.gladiators
      const [weapon1, weapon2] = [gladiator1.weapon, gladiator2.weapon]
      console.log(weapon1)
      console.log(weapon2)
        if (weapon1 === 'Trident' && weapon2 ==='Spear'){
        console.log('Trident beats spear')
        this.gladiators.splice(1,1)
        //  this.gladiators.pop();
        }
        if (weapon1 === 'Trident' && weapon2 === 'Club'){
            console.log('Trident beats club')
            this.gladiators.splice(0,1)
            // this.gladiator.pop();
        }
        if (weapon1 === 'Spear' && weapon2 === 'Trident'){
            console.log('spear beats Trident')
            this.gladiators.splice(1,1)
            // this.gladiator.pop();
        }
        if (weapon1 === 'club' && weapon2 === 'spear'){
            console.log('club beats spear')
            this.gladiators.splice(0,1)
            // this.gladiator.pop();
        }
        if (weapon1 === weapon2){
          console.log('tie')
          this.gladiators.splice(0,1)
          // this.gladiator.pop();
      }
    }
    entertain(){
    if ((this.gladiators.name) === "Maximus" || (this.gladiators.name) === "Maximus") {
        this.gladiators.splice(0,1)
      console.log("Crowd is entertained!");
    }else {
      console.log("Crowd is not entertained...");
    }

  }
}
