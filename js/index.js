'use strict';
import Gladiator from './gladiator.js';
import Arena from './arena.js';






// //part 1 Gladiator
// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"

// // part 2 #1
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name); // => Colosseum

// // part 2 #2
// const megalopolis = new Arena("megalopolis");
// console.log(megalopolis.name); // => Megalopolis

// // part 2 #3
// const gladiator = new Arena("Colosseum");
// console.log(gladiator.gladiators); // => []

// // part 2 #4
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]

// // part 2 #5
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiators.length); // => 2


// part 2 #6
const max = new Gladiator("Maximus", "Spear");
const titus = new Gladiator("Titus", "Trident");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]