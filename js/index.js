console.log('its work');
import Gladiator from './gladiator.js';
import Arena from './arena.js';

// const max = new Gladiator("Maximus", "Trident");
// console.log(max);
// console.log(max.weapon)

// //


// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis
// console.log(colosseum.gladiator);

//
// const max = new Gladiator("Maximus", "Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiator);
//
const max = new Gladiator("Maximu", "Club");
const titus = new Gladiator("Titus", "Spear");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum = new Arena("colosseum");
console.log(colosseum.name);
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators);
console.log(colosseum.gladiators.length);
colosseum.fight();
console.log(colosseum.gladiators);