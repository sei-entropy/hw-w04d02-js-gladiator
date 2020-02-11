import Gladiator from "./gladiator.js";
import Arena from "./arena.js";

const faisal = new Gladiator("Faisal", "Club");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("cOlOsSeUm");
console.log(colosseum.name);

colosseum.addGladiator(faisal);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]
