
import Gladiator from './gladiator.js';
import Arena from './arena.js';
//part1
// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); 
// console.log(max.weapon);

// //Part 2: An arena has a name
// const colosseum = new Arena("Colosseum");
// //console.log(colosseum.name); // => Colosse


// //The name should be capitalized
// const Megalopolis = new Arena("megalopolis");
// console.log(Megalopolis.name); // => Megalopolis

 //An arena can have gladiators
  //const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []

 //You can add a gladiator to the arena
 //const max = new Gladiator("Maximus","Trident");
 //const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators);


 //The arena should never have more than 2 gladiators in it at a time
 //const max = new Gladiator("Maximus","Trident");
 //const titus = new Gladiator("Titus","Sword");
// const andronicus = new Gladiator("Andronicus","Sword");
 //const colosseum = new Arena("Colosseum");
 // colosseum.addGladiator(max);
 // colosseum.addGladiator(titus);
 // colosseum.addGladiator(andronicus);
// console.log(colosseum.gladiators.length);


//If there are two gladiators in the arena, you can call a fight method that results in the elimination of one of the gladiators from the arena.
const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");
 colosseum.addGladiator(max);
 colosseum.addGladiator(titus);
 colosseum.fight();
 console.log(colosseum.gladiators); // => [max]
