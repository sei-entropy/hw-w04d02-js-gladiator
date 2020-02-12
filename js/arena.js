import Gladiator from './gladiator.js'
export default class Arena extends Gladiator {

    constructor(name, gladiators = []) {
        // this.name = name;

        super();
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = gladiators;
    }
    addGladiator(Gladiator) {
        if (this.gladiators.length <= 1)
            this.gladiators.push(Gladiator)
    }
    fight() {
        if (this.gladiators[0].weapon === 'Tredint' && this.gladiators[1].weapon === 'Spear' ||
            this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club ' ||
            this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Tredint ')
            this.gladiators.pop();

        else if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Tredint' ||
            this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Spear ' ||
            this.gladiators[0].weapon === 'Tredint' && this.gladiators[1].weapon === 'Club ')
            this.gladiators.shift();

        else if (
            this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Spear' ||
            this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Club ' ||
            this.gladiators[0].weapon === 'Tredint' && this.gladiators[1].weapon === 'Tredint ')
            this.gladiators.pop();
        this.gladiators.pop();


    }



}