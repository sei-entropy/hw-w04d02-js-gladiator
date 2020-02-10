export default class Gladiator { 
    constructor(name , weapon) 
    { 
        this.name=name;
        //this.weapon= weapon; 
        this.GladiatorWeapon=weapon;
     }

     set GladiatorWeapon ( weapon ) 
  { 
     switch (weapon) {
         case 'Spear':
            this.weapon= weapon
             break;

             case 'Club' : 
             this.weapon= weapon
             break; 

             case 'Trident' :
            this.weapon= weapon
            break;

            default:
            console.log(`This in not vaild weapon `)
             break;
     }
 }
      
 }


 
