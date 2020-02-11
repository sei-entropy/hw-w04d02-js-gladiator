


export default class Gladiator {

    constructor( name , weapon){
        this.name = name;
        this.weapon = weapon;
    }

    name(){
        return `${this.name}`;
    }

    weapon(){
        return `${this.weapon}`;
    }

}