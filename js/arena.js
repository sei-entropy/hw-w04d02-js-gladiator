import gladiator from './gladiator.js';



export default class arena extends gladiator {

    constructor(name) {

        this.name = name.charAt(0).toUpperCase() + name.substring(1);

        this.gladiators = [];
    }

 

    addGladiator(gladiator) {

        if (this.gladiators.length < 2) {
            this.gladiators.push(Gladiator)
        }

    }


    removeGladiator(gladiator) {

        if (this.gladiators.length < 2) {
            this.gladiators.pop(Gladiator)
        }

    }


    fight() {

        if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear') {
            console.log(this.gladiator[0] + ' Win');
            this.removeGladiator(this.gladiators[1]);
        }

        if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon == 'Club') {

            console.log(this.gladiator[0] + ' Win');
            this.removeGladiator(this.gladiators[1]);
        }

        if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == 'Trident') {

            console.log(this.gladiator[0] + ' Win');
            this.removeGladiator(this.gladiators[1]);
        }

        if (this.gladiators[1].weapon == 'Trident' && this.gladiators[0].weapon == 'Spear') {
            console.log(this.gladiator[1] + ' Win');
            this.removeGladiator(this.gladiators[0]);
        }

        if (this.gladiators[1].weapon == 'Spear' && this.gladiators[0].weapon == 'Club') {

            console.log(this.gladiator[1] + ' Win');
            this.removeGladiator(this.gladiators[0]);
        }

        if (this.gladiators[1].weapon == 'Club' && this.gladiators[0].weapon == 'Trident') {

            console.log(this.gladiator[1] + ' Win');
            this.removeGladiator(this.gladiators[0]);
        }

        if (this.gladiators[0].weapon==this.gladiators[1].weapon){
            console.log('both eliminated');
            this.removeGladiator(this.gladiators[0]);
            this.removeGladiator(this.gladiators[1]);
        }

    }

}
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum


const colosseum1 = new Arena("megalopolis");
console.log(colosseum1.name); // => Megalopolis


const colosseum2 = new Arena("Colosseum");
console.log(colosseum2.gladiators);



const max = new Gladiator("Maximus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]