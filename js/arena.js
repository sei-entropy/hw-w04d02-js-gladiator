import Gladiator from './gladiator.js'

export default class Arena { 
    constructor (arinaName, gladiators) { 
this._name=arinaName;
this.gladiators=[];
this.weaponUsed=[];
this.newGladiators =[]
    }
    get arinaName() {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1)
      }
addGladiator(Gladiator) 
{ 
    if(this.gladiators.length < 2)
    this.gladiators.push(Gladiator.name)
    else 
    console.error("There are already two gladiators in the arena.")

    this.weaponUsed.push(Gladiator.weapon)
}

maxMight ()
{ 
    for ( let i=0 ; i<this.gladiators.length ; i++){ 
        if (this.gladiators[i] === 'Maximus') 
        { 
            return true;
        }
}
}
fight(){

        if (this.maxMight() === true) 
        { 
            this.gladiators = ['Maximus']
        }
        else { 

        const firstWeapon = this.weaponUsed[0]; 
        const secondWeapon = this.weaponUsed[1];

        if ( firstWeapon === secondWeapon ){ 
            this.gladiators = [];  
        }
        else if (firstWeapon === 'Spear' && secondWeapon ==='Club'){ 
            this.gladiators.pop()
        }
        else if (  firstWeapon === 'Spear' && secondWeapon === 'Trident'){ 
            this.gladiators.shift() 
        }
    
        else if (  firstWeapon === 'Club' && secondWeapon === 'Trident'){ 
            this.gladiators.pop() 
        }
    
        else if (  firstWeapon === 'Club' && secondWeapon === 'Spear'){ 
            this.gladiators.shift() 
        }
    
        else if (  firstWeapon === 'Trident' && secondWeapon === 'Spear'){ 
            this.gladiators.pop() 
        }
        else if (  firstWeapon === 'Trident' && secondWeapon === 'Club'){ 
            this.gladiators.shift() 
        }

    }
    
    
  
    
}

 removeByName (removeThis)
{ 
    for ( let i=0 ; i<this.gladiators.length ; i++){ 
        if (removeThis !== this.gladiators[i] )
        {
            this.newGladiators.push(this.gladiators[i]); 
        }

    }
}


}

