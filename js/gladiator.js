export default class Gladiator {
    constructor(name, weapon) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        if (weapon === "Trident" || weapon === "Spear" || weapon === "Club") {
            this.weapon = weapon;
        } else {
            console.log(" Error the wepon unvalid");
        }
    }
}