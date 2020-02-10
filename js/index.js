'use strict';

import Arena from './arena.js'
import  Gladiator from './gladiator.js'

const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"

//An arena has a name:
let colosseum = new Arena("Colosseum")
console.log(colosseum.name) // => Colosseum

//The name should be capitalized:
colosseum = new Arena("Megalopolis")
console.log(colosseum.name); // => Megalopolis

//An arena can have gladiators:
colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []


//You can add a gladiator to the arena :

//max = new Gladiator("Maximus","Trident");
colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
 console.log(colosseum.gladiators); // => [Gladiator]


//The arena should never have more than 2 gladiators in it at a time


//max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length); // => 2

//fight:


// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Spear");
// const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
console.log(colosseum.fight());

console.log(colosseum.gladiators); // => [max]