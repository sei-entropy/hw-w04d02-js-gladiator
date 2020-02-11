import Gladiator from './gladiator.js';

export default class Arena {
    constructor(name, gladiators) {
        this._name = name;
        this.gladiators = [];

    }

    get name() {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
    addGladiator(name) {
        if (this.gladiators.length < 2)
            this.gladiators.push(name);
    }

    fight() {
        if (this.gladiators.length <= 2) {
            if (this.gladiators[1].weapon === this.gladiators[0].weapon) {
                return 'both of you are eliminated';
            } else if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear' ||
                this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club' ||
                this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
            this.gladiators.splice(1);
            
                console.log(this.gladiators[0].name);
                
                 
            }

        }
        // else {

        // }
    }



}