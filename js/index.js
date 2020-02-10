'use strict';
import Gladiator from './gladiator.js';
import Arena from './arena.js';

const max = new Gladiator('Maximus', 'Club');
const max2 = new Gladiator('Maximus', 'Spear');
console.log(max.name);
console.log(max.weapon);

const arena = new Arena('some arena');
arena.addGladiator(max);
arena.addGladiator(max2)
console.log(arena.name);
console.log(arena.gladiators);