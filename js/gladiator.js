export default class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        this.validWeapons = ['Spear', 'Club', 'Trident'];

        // check if the weapon is valid or throw and exception.
        if (this.validWeapons.includes(weapon)) {
            this.weapon = weapon;
        } else {
            throw new Error('Invalid weapon');
        }
    }
}