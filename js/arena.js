export default class Arena {
    constructor(name) {
        this.name = name.replace(name[0], name[0].toUpperCase())
        this.gladiators = [];
        this.isCrowdEntertained = false

    }

    addGladiator(gladiator) {
        if (this.gladiators.length <= 1) {
            this.gladiators.push(gladiator);
        }
        else {
            throw new Error('Sorry, the arena should never have more than 2 gladiators in it at a time');
        }
    }

    fight() {
        let players = [];
        let playersWeapons = [];
        let weaponsMap = [];
        for (const element of this.gladiators) {
            players.push(element.name)
            playersWeapons.push(element.weapon)
            weaponsMap.push(element.weapons)
        }
        weaponsMap.pop()

        const choiceStack = weaponsMap[0];
        const playerPickedIndex1 = choiceStack.indexOf(playersWeapons[0]);
        const playerPickedIndex2 = choiceStack.indexOf(playersWeapons[1]);
        const results = [['e', 'c', 'u'], ['u', 'e', 'c'], ['c', 'u', 'e']];
        const playersResult = results[playerPickedIndex2][playerPickedIndex1];

        const winner = index => {
            this.gladiators = [];
            this.gladiators.push(players[index])
            this.gladiators.push(playersWeapons[index])
        }

        const winnerMsg = () => {
            const resultMap = { 'e': "Eliminated", 'u': "Gladiator 1 win", 'c': "Gladiator 1 lose" };
            const resurtString = `Gladiator 1) ${players[0]} picked: ${playersWeapons[0]}. Gladiator 2) ${players[1]} picked: ${playersWeapons[1]}. ${resultMap[playersResult]}.`
            console.log(resurtString);
        }

        if (players[0] === 'Maximus') {
            winner(0)
            this.isCrowdEntertained = true;
            const resurtString = `The winner is ${players[0]}, with ${playersWeapons[0]}.`
            console.log(resurtString);
        } else if (players[1] === 'Maximus') {
            winner(1)
            this.isCrowdEntertained = true;
            const resurtString = `The winner is ${players[1]}, with ${playersWeapons[1]}.`
            console.log(resurtString);
        } else if (resultMap[playersResult] === 'Player 1 win') {
            winner(0)
            winnerMsg()
        } else {
            winner(1)
            winnerMsg()
        }
        return this.gladiators;
    }

    entertained() {
        return this.isCrowdEntertained
    }

    removeGladiators(name) {
        const remove = this.gladiators.indexOf(name);
        this.gladiators.splice(remove, 1);
    }

}
