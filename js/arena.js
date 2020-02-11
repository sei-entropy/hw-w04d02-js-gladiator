class Arena {
    constructor(name, gladiators = []) {

        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = gladiators


    }

    addGladiator(xyz) {
        if (this.gladiators.length < 2)
            this.gladiators.push(xyz);
    }


    fight() {
            if (this.gladiators[0].weapon === "Trident" &&
                this.gladiators[1].weapon === "Spear") {
                return this.gladiators[0];
            }
            else if (this.gladiators[0].weapon === "Spear" &&
                this.gladiators[1].weapon === "Trident"){
                return this.gladiators[1];
            }

            else if (this.gladiators[0].weapon === "Spear" &&
                this.gladiators[1].weapon === "Club"){
                return this.gladiators[0];
            }

            else if (this.gladiators[0].weapon === "Club" &&
                this.gladiators[1].weapon === "Spear") {
                return this.gladiators[1];
            }


           else  if (this.gladiators[0].weapon === "Club" &&
                this.gladiators[1].weapon === "Trident") {
                return this.gladiators[0];
            }
            else if (this.gladiators[0].weapon === "Trident" &&
                this.gladiators[1].weapon === "Club") {
                return this.gladiators[1];
                }

            else if (this.gladiators[0].weapon === this.gladiators[1].weapon){
                        return "both gladiators eliminated" 
             };


        }
    }
                export {Arena};