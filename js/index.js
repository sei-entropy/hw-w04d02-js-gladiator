// JS Gladiator Arena

'use strict'


// Part 1:
import Gladiator from './gladiator.js'

const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"



// Part 2:
import Arena from './arena.js'

const colosseum = new Arena("megalopolis");
console.log(colosseum.name); // => Megalopolis

//---------------------------------------------------

const colosseum2 = new Arena("Colosseum");
console.log(colosseum2.gladiators); // => []

//---------------------------------------------------

const max3 = new Gladiator("Maximus","Trident");
const colosseum3 = new Arena("Colosseum");
colosseum3.addGladiator(max3);
console.log(colosseum3.gladiators); // => [Gladiator]
colosseum3.fight();

//---------------------------------------------------

const max4 = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum4 = new Arena("Colosseum");

colosseum4.addGladiator(max4);
colosseum4.addGladiator(titus);
colosseum4.addGladiator(andronicus);

console.log(colosseum4.gladiators.length); // => 2
console.log(colosseum4.gladiators); // => []

//---------------------------------------------------

const max5 = new Gladiator("Maximus","Trident");
const titus5 = new Gladiator("Titus","Spear");
const colosseum5 = new Arena("Colosseum");

colosseum5.addGladiator(max5);
colosseum5.addGladiator(titus5);
colosseum5.fight();

console.log(colosseum5.gladiators); // => [max]
