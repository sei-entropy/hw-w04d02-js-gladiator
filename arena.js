import Gladiator from './gladiator.js';


export default class Arena extends Gladiator {
    constructor(name, gladiators = []) {
        super();
        this.name = name.toUpperCase();
        this.gladiators = gladiators;
    }


    addGladiator(gladiators) {
        if (this.gladiators.length < 2)
            this.gladiators.push(gladiators);
    }


    fight() {

        if (this.gladiators.length >= 1) {
            if ((this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear') ||
                (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club') ||
                (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident')
            ) {

            } //inner if
            else if ((this.gladiators[1].weapon === 'Trident' && this.gladiators[0].weapon === 'Spear') ||
                (this.gladiators[1].weapon === 'Spear' && this.gladiators[0].weapon === 'Club') ||
                (this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Trident')
            ) {

            } //inner if
            else if ((this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Trident') ||
                (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Spear') ||
                (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Club')
            ) {
                this.gladiators.splice(0,2);
            } //inner if

        } //outer if

    } //fight
}



