export default class Arena {
    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        this.gladiators = [];
    }

    addGladiator(gladiator) {
        if (this.gladiators.length < 2) {
            this.gladiators.push(gladiator);
        }
    }

    fight() {
        // if the gladiators in the arena are less than then fight can't start
        if (this.gladiators.length < 2) {
            return;
        }

        // make an array with the weapons of the 2 gladiators
        const gladiatorWeapons = [
            this.gladiators[0].weapon,
            this.gladiators[1].weapon
        ];
        let winner;

        // if a gladiator is 'Maximus' he's the winner by default
        if (this.MaximusInArena()) {
            winner = this.gladiators.find(el => el.name === 'Maximus');
            this.keepWinnerInArena(winner);

            // if the two gladiators have the same weapon both are eleminated
            // from the arena (the gldiators arr is cleared).
        } else if (gladiatorWeapons[0] === gladiatorWeapons[1]) {
            this.gladiators = [];
            return 'Both players are eleminated.';

            // match the weapons of the gladiators and pick a winner 
        } else if (['Trident', 'Spear'].every(wp => gladiatorWeapons.includes(wp))) {
            winner = this.gladiators.find(el => el.weapon === 'Trident');
            this.keepWinnerInArena(winner);

        } else if (['Club', 'Spear'].every(wp => gladiatorWeapons.includes(wp))) {
            winner = this.gladiators.find(el => el.weapon === 'Spear');
            this.keepWinnerInArena(winner);

        } else {
            winner = this.gladiators.find(el => el.weapon === 'Club');
            this.keepWinnerInArena(winner);
        }

        return `Winner is: ${winner.name}!`;
    }

    // return true if Maximus is in the arena, and false otherwise.
    MaximusInArena() {
        return this.gladiators.some(el => el.name == 'Maximus');
    }

    // return true if Maximus is in the arena, and false otherwise.
    entertained() {
        return this.MaximusInArena();
    }

    // reassigns the gldiators array to only include the winner
    keepWinnerInArena(winner) {
        this.gladiators = this.gladiators.filter(el => el === winner);
    }
}