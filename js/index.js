// imports
import Gladiator from './gladiator.js';
import Arena from './arena.js';

// create new arena
const colosseum = new Arena('colosseum');
console.log(colosseum.name);

// create gladiator 1
const max = new Gladiator('Maximus', 'Trident');

console.log(max.name);
console.log(max.weapon);

// create gladiator 2
const titus = new Gladiator('titus', 'Spear');
// create gladiator 3
const andronicus = new Gladiator('andronicus', 'club');

// adding gladiators to the arena
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

// checking gladiator 3 won't be added to the arena
console.log(colosseum.gladiators.length);

colosseum.fight();
colosseum.isEntertained();
colosseum.removeGladiator('titus')

console.log(colosseum);

colosseum.isEntertained();