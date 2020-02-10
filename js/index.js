"use strict";

//import the classes
import Gladiator from "./gladiator.js";
import Arena from "./arena.js";

// 1st part - display gladiator's name
// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"

//2nd part - Arena name (capitalized)
// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis

//2nd part - An arena can have gladiators
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []

//2nd part - add a gladiator to the arena
// const max = new Gladiator("Maximus", "Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]

// console.log(max)

// 2nd part - The arena should never have more than 2 gladiators in it at a time
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiators.length); // => 2

/*2nd part - If there are two gladiators in the arena, 
you can call a fight method that results in the elimination 
of one of the gladiators from the arena.*/
const max = new Gladiator("Maximus", "Club");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]

// Trident beats Spear
// Spear beats Club
// Club beats Trident
// If the two gladiators have the same weapon, they are both eliminated.
