console.log('its work');
export default class gladiator {
    constructor(name, weapon) {
        this.name = name;
        //spear , club or trident
        if (weapon === 'Spear' || weapon === 'Club' || weapon === 'Trident') {
            this.weapon = weapon;
        } else {
            console.log('throw an error');
        }
    }
}

// const max = new Gladiator("Maximus", "taco");
// console.log(max);