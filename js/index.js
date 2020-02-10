import Gladiator from './gladiator.js';
import Arena from './arena.js'

// const max = new Gladiator("Maximus", "Trident");
// // //console.log(max);
//  console.log(max.name); // "Maximus"
//  console.log(max.weapon);// "Trident"

//  const maxx=new Gladiator("Jesse", "Taco");// "Error" 
// // console.log(maxx.weapon);// "undefined"




// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Spear");
// const andronicus = new Gladiator("Andronicus","Spear");
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
console.log(colosseum.gladiators);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]