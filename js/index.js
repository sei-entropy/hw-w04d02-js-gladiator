'use strict';
import {
    Gladiator
} from './gladiator.js';
import {
    Arena
} from './arena.js';

// Spear, Trident, Club
// Trident beats Spear
// Spear beats Club
// Club beats Trident
// If the two gladiators have the same weapon, they are both eliminated.

const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
/*
const max = new Gladiator("Maximus", "Spear");
const titus = new Gladiator("Titus", "Club");
const colosseum = new Arena("Colosseum");
*/

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();


console.log(colosseum.name)
console.log(colosseum.gladiators); // => [max]