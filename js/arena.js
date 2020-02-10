export default class Arena {
    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [];
    }

    addGladiator(gladiator) {
        this.gladiators.push(gladiator);
        if (this.gladiators.length === 2) {
            this.gladiators.sort();
            this.fight();
        }
    }

    fight() {
        if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Trident') {
            this.gladiators = [this.gladiators[1]];
        } else if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Spear') {
            this.gladiators = [this.gladiators[1]];
        } else if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
            this.gladiators = [this.gladiators[0]];
        } else if (this.gladiators[1].weapon === 'Spear' && this.gladiators[0].weapon === 'Trident') {
            this.gladiators = [this.gladiators[0]];
        } else if (this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Spear') {
            this.gladiators = [this.gladiators[0]];
        } else if (this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Trident') {
            this.gladiators = [this.gladiators[1]];
        } else if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
            this.gladiators = [];
        }
    }
}