
import Gladiator from './gladiator.js';
import Arena from './arena.js';



// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name); // => Colosseum

// const max = new Gladiator("Maximus", "Trident");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]

// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");

// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiator); // => 2

const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log('The winner is :'+ colosseum.gladiators); // => [max]