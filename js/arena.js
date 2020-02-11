export default class Arena {
    // Capitalizing arena name and declaring empty array for gladiators
    constructor(name) {
        this.name = name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        this.gladiators = [];
        this.entertained = false;
    }

    // add a gladiator to the array
    addGladiator(gladiator) {
        // if the 2 gladiators already in the arena >> don't add anymore gladiators
        if (this.gladiators.length < 2)
            this.gladiators.push(gladiator);
        else
            console.log('There are already two gladiators in the arena!');
    }

    fight() {
        // winning conditions: trident > spear, spear > club, club > trident
        // looping around gladiators 2 times
        for (let i = 0; i < 2; i++)
            if (this.gladiators[0].name === 'Maximus') {
                console.log(`${this.gladiators[0].name} wins!`);
                return;
            }
        // in every case the first gladiator is the winner
        else if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear') {
            
            console.log(`${this.gladiators[0].name} wins!`)
            return;
        } else if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club') {
            console.log(`${this.gladiators[0].name} wins!`);
            return;
        } else if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
            console.log(`${this.gladiators[0].name} wins!`);
            return;
        } else
            // if none of the above is true >> reverse the array and check againg
            this.gladiators.reverse();
    }

    //Bonus methods
    removeGladiator(name) {
        // capitalizing
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        // filter and find the gladiator by his name && splice the array starting from the returned index and for one step
        this.gladiators.splice([this.gladiators.findIndex(gladiator => {
            return gladiator.name === name;
        })], 1);
    }

    isEntertained(){
        this.gladiators.filter(gladiator => {
            if(gladiator.name === 'Maximus')
            this.entertained = true;
        });
        console.log(this.entertained);
    }
}