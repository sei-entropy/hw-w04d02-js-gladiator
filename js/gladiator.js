export default class Gladiator {
    constructor(name, weapon) {
        // capitalizing name && weapon
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        this.name = name;
        // Checking weapon is (spear || trident || club) otherwise throw an error message
        weapon = weapon.charAt(0).toUpperCase() + weapon.slice(1).toLowerCase();
        if (weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident')
            this.weapon = weapon;
        else
            throw 'Invalid weapon';
    }
}