import Gladiator from './gladiator.js';
import Arena from './arena.js';





const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"




//==============================================================================



const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum


const colosseum1 = new Arena("megalopolis");
console.log(colosseum1.name); // => Megalopolis


const colosseum2 = new Arena("Colosseum");
console.log(colosseum2.gladiators);



const max1 = new Gladiator("Maximus", "Trident");
const colosseum3 = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]