'use strict';
import Gladiator from './gladiator.js';
import Arena from './arena.js';

// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"
////////////
// const max = new Gladiator("Maximus", "Triddfsent");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"
////////////
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name); // => Colosseum
////////////
// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis
////////////
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []
////////////
// const max = new Gladiator("Maximus", "Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]
//////////
// const max = new Gladiator("Maximus", "Trident");
// //const titus = new Gladiator("Titus", "Sword"); //Error: Sorry, weapon is not correct, try Spear, Club or Trident
// //const andronicus = new Gladiator("Andronicus", "Sword"); //Error: Sorry, weapon is not correct, try Spear, Club or Trident
// const titus = new Gladiator("Titus", "Club");
// // const andronicus = new Gladiator("Andronicus", "Spear"); //Error: Sorry, the arena should never have more than 2 gladiators in it at a time
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// // colosseum.addGladiator(andronicus); //Error: Sorry, the arena should never have more than 2 gladiators in it at a time
// console.log(colosseum.gladiators.length); // => 2
////////////
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Spear");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.fight();
// console.log(colosseum.gladiators); // => [max]
////////////
//console.log(colosseum.removeGladiators('Maximus'));
////////////
// The winner is Maximus, with Spear.
const max = new Gladiator("Maximus", "Spear");
const titus = new Gladiator("Titus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]
//////////
console.log(colosseum.entertained())
////////////
