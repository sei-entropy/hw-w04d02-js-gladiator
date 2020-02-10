export default class Arena {

    constructor(name) {
        this.name = this.nameCapitalized(name);
        this.gladiators = [];
    }

    nameCapitalized(name) {
        name = name.toLowerCase().replace(/\b[a-z]/, function (letter) {
            return letter.toUpperCase();
        });
        return name;
    }

    addGladiator(obj) {
        if (this.gladiators.length === 2) {
            console.log("Full!")
        } else {
            this.gladiators.push(obj);
        }
    }
    fight() {
        let execute=true;
        if(execute && this.gladiators[0].weapon==='Trident' && this.gladiators[1].weapon==='Spear'){
            this.gladiators.splice(1,1);
            execute=false;
        }
        if(execute && this.gladiators[0].weapon==='Trident' && this.gladiators[1].weapon==='Club'){
            this.gladiators.splice(0,1);
            execute=false;
        }
        if(execute && this.gladiators[0].weapon==='Spear' && this.gladiators[1].weapon==='Club'){
            this.gladiators.splice(1,1);
            execute=false;
        }
        if(execute && this.gladiators[0].weapon==='Spear' && this.gladiators[1].weapon==='Trident'){
            this.gladiators.splice(0,1);
            execute=false;
        }
        if(execute && this.gladiators[0].weapon==='Club' && this.gladiators[1].weapon==='Trident'){
            this.gladiators.splice(1,1);
            execute=false;
        }
        if(execute && this.gladiators[0].weapon==='Club' && this.gladiators[1].weapon==='Spear'){
            this.gladiators.splice(0,1);
            execute=false;
        }


        if(execute && this.gladiators[0].weapon===this.gladiators[1].weapon){
            this.gladiators.splice(0,2);
            execute=false;
        }

    }

}
