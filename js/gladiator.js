export default class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        this.weapons = ['Trident', 'Spear', 'Club'];
        this.weapon = this.handleWeapon(weapon);
    }

    handleWeapon(weapon) {
        if (this.weapons.find(e => { return e === weapon; })) {
            return this.weapon = weapon;
        }
        else {
            throw new Error('Sorry, weapon is not correct, try Spear, Club or Trident');
        }
    }
}
