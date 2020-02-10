import {
    Gladiator
} from './gladiator.js';
class Arena extends Gladiator {
    constructor(name) {
        super();
        this.name = name;
        this.gladiators = [];

    }
    capitlized() {
        return this.name[0].toUpperCase() + this.name.substr(1);

    }
    addGladiator(name) {
        if (this.gladiators.length < 2) {
            return this.gladiators.push(name);
        }
    }
    fight() {
        // It will check the index of the winner and splice(remove) the second index 
        if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear') {
            console.log("Trident beat the Spear");
            this.gladiators.splice(1, 1);
        } else if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club') {
            console.log("Spear beats Club");
            this.gladiators.splice(1, 1);
        } else if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
            console.log("Club beats Trident");
            this.gladiators.splice(1, 1);
        } else if (this.gladiators[1].weapon === 'Trident' && this.gladiators[0].weapon === 'Spear') {
            console.log("Trident beat the Spear");
            this.gladiators.splice(0, 1);
        } else if (this.gladiators[1].weapon === 'Spear' && this.gladiators[0].weapon === 'Club') {
            console.log("Spear beats Club");
            this.gladiators.splice(0, 1);
        } else if (this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Trident') {
            console.log("Club beats Trident");
            this.gladiators.splice(0, 1);
        } else if (this.gladiators[1].weapon === this.gladiators[0].weapon) {
            console.log("both eliminated.")
            //will remove both starting from zero
            this.gladiators.splice(0, 2);
        }
    }

}

export {
    Arena
}