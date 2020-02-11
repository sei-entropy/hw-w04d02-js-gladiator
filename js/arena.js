 import Gladiator from './gladiator.js';


export  class Arena {
   constructor(name ){
        this.name=name.toUpperCase();
        this.gladiators=[];
}

addGladiator(gladiators) {
    if (this.gladiators.length <= 2)
    {
    this.gladiators.push(gladiators);
}

    else {
        console.log( 'More than 2 Gladiators in the Arena!');}}



    fight() {

    if(this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear" 
    || this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club" 
    || this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident")
    {
       console.log( `${this.gladiators[0].name} `)

    }
    else if(this.gladiators[1].weapon == "Trident" && this.gladiators[0].weapon == "Spear"
     || this.gladiators[1].weapon == "Spear" && this.gladiators[0].weapon == "Club" 
     || this.gladiators[1].weapon == "Club" && this.gladiators[0].weapon == "Trident")
     {
        console.log( `${this.gladiators[1].name} `)

    }
    else{
        console.log (' eliminated');
    }
}
} 

const colosseum = new Arena("megalopolis");
/* console.log(colosseum.name);
MEGALOPOLIS */

//................................................

// => [Gladiator]
/* class Gladiator{
    constructor(name,weapon){

        this.name=name;
        this.weapon=weapon;
    }
}
const max = new Gladiator("Maximus","Trident"); */
/* //const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); */