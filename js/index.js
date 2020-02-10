import Gladiator from './gladiator.js'
import Arena from './arena.js'


const max = new Gladiator("Maximus","Spear");
const titus = new Gladiator("Titus","Trident");
const colosseum = new Arena("Colosseum");


colosseum.addGladiator(max);
colosseum.addGladiator(titus);

console.log(colosseum.gladiators);
colosseum.fight();

// remove By calling the name. 

// colosseum.removeByName('Maximus');
// console.log(colosseum.newGladiators);

console.log(colosseum.gladiators); // => [max]