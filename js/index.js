
import Gladiator from './gladiator.js'
import Arena from './arena.js'



//const max = new Gladiator("MaxIMus", "Trident");
//console.log(max.name); // "Maximus"
//console.log(max.weapon); // "Trident"
 //const colosseum = new Arena("Colosseum");
 //console.log(colosseum.name); // => Colosseum

// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis

// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []

// const max = new Gladiator("Maximus","Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]

// console.log(colosseum.gladiators.length); // => 2

// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Spear");
// const colosseum = new Arena("Colosseum");

// console.log(colosseum.gladiators); // => [max]


 const max = new Gladiator("Maximus","Spear");
 const titus = new Gladiator("Titus","Trident");
 const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

