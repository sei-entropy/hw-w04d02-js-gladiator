import Gladiator from './gladiator.js';

export default class Arena {
    constructor(name) {
        this.name = name;
        this.gladiators = [];
    }
    addGladiator(gladiators) {
        if (this.gladiators.length < 2) {
            this.gladiators.unshift(gladiators);

        }
    }


    fight() {
        const fight1 = this.gladiators[0].weapon;
        const fight2 = this.gladiators[1].weapon;

        if (this.gladiators.length === 2) {
            if ((fight1 === "Trident" && fight2 === "Spear") ||
                (fight1 === "Spear" && fight2 === "Club") ||
                (fight1 === "Club" && fight2 === "Trident")) {
                this.gladiators.splice(1);
                console.log(fight1 + ' win');

            } else if ((fight2 === "Trident" && fight1 === "Spear") ||
                (fight2 === "Spear" && fight1 === "Club") ||
                (fight2 === "Club" && fight1 === "Trident")) {
                console.log(fight2 + " win");
                this.gladiators.splice(0,1);
            }
        }
    }

}