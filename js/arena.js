export default class Arena {
    constructor(name) {
        this.name = name;
        //An arena can have gladiators
        this.gladiators = [];
    }

    //The name should be capitalized
    capitalize() {
        return `${this.name.charAt(0).toUpperCase()}`;
    }

    //You can add a gladiator to the arena
    addGladiator(wari) {
        //The arena should never have more than 2 gladiators in it at a time
        if (this.gladiators.length < 2) {
            this.gladiators.push(wari);
        } else {
            console.log('full');
        }
    }

    //If there are two gladiators in the arena, you can call a fight method that results in the
    //elimination of one of the gladiators from the arena.
    fight() {
        if (this.gladiators[0].weapon == this.gladiators[1].weapon) {
            this.gladiators = [];
        } else if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon == 'Trident') {
            this.gladiators.shift();
        } else if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon == 'Club') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == 'Spear') {
            this.gladiators.shift();
        } else if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == 'Trident') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Club') {
            this.gladiators.shift();
        }
    }

}

// rident beats Spear
// Spear beats Club
// Club beats Trident