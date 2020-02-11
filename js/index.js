'use strict';
import Arena from "./arena.js";
import Gladiator from ".gladiator.js";

console.log('it is work');


const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"


//arena has a name
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum

//name should be capitalized
const colosseum = new Arena("megalopolis");
console.log(colosseum.name); // => Megalopolis

//arena can have gladiators
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []

//add a gladiator to the arena
const max = new Gladiator("Maximus","Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]

//arena should never have more than 2 gladiators in it at a time
const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length); // => 2

/* If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions
- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated. */


const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]