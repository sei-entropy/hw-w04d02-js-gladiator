export default class Gladiator {
    constructor(name, weapon) {
        this.name = name;

        if (weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident') {
            this.weapon = weapon;
        } else {
            console.log('throw an error');
        }
    }

}