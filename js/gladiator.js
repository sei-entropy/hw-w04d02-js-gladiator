export default class Gladiator {

    constructor(name, weapon) {
        this.name = name;
        this.weapon = this.makeweapon(weapon);
    }

    makeweapon(weapon) {
        if (weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident') {
            return weapon;
        } else {
            console.log("Error");
        }

    }
}