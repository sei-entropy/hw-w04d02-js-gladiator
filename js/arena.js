


export default class Arena extends Gladiator {

    constructor(name) {

        this.name = name.charAt(0).toUpperCase() + name.substring(1);

        this.gladiators = [];
    }

 

    addGladiator(gladiator) {

        if (this.gladiators.length < 2) {
            this.gladiators.push(Gladiator)
        }

    }


    // removeGladiator(gladiator) {

    //     if (this.gladiators.length < 2) {
    //         this.gladiators.splice(gladiators[]);
    //     }

    // }


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
