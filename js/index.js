import Gladiator from './Gladiator.js';
import Arena from './Arena.js';

// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"

// The name should be capitalized
// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis

//You can add a gladiator to the arena
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []
// const max = new Gladiator("Maximus","Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]

//The arena should never have more than 2 gladiators in it at a time
// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Sword");
// const andronicus = new Gladiator("Andronicus","Sword");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiators.length); // => 2



const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]