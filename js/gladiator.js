



   export default class Gladiator{

        constructor(name,weapon){
     
      this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

          if(weapon == "Spear" ||weapon == "Club" ||weapon =="Trident"){
            this.weapon = weapon;    
          }else{
            console.log (`Make shore you pick one of thees weapons:  "Spear" OR "Club" OR "Trident `)
          }

      };  
   


}

