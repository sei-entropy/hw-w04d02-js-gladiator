import Gladiator from './gladiator.js'

export default class Arena {

    constructor(name, gladiators) {
        this._name = name;
        this.gladiators = [];
        this.gladiatorWep =[];     
    }

    get name() {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1)
    }

    addGladiator(Gladiator) {
        if (this.gladiators.length < 2) {
            this.gladiators.push(Gladiator.name);
            this.gladiatorWep.push(Gladiator.weapon);
            //console.log(this.gladiators, this.gladiatorWep );
        }
    }

    r
    fight() {
        if (this.gladiators.length <= 2) {

            if (this.gladiatorWep[1] === this.gladiatorWep[0]) {
                console.log('The two of you are eliminated');
            } 
            else if (this.gladiatorWep[0] === 'Trident' && this.gladiatorWep[1] === 'Spear' ||
                this.gladiatorWep[0] === 'Spear' && this.gladiatorWep[1] === 'Club' ||
                this.gladiatorWep[0] === 'Club' && this.gladiatorWep[1] === 'Trident') {

                this.gladiators.pop();
            } 
            
            else {
                this.gladiators.shift();
            }

        }
    }
}
