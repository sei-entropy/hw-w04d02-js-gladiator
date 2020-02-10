export default class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        const isWeaponValid = this.checkWeapon(weapon);
        if (isWeaponValid) this.weapon = weapon;
        else console.error('Weapon is invalid');
    }

    checkWeapon(weapon) {
        return weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident';
    }
}