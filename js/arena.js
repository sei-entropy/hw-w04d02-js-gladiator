
    import Gladiator from './gladiator.js'

export default class Arena {

    constructor(name){
        this.name = name.replace( name.charAt(0) , name.charAt(0).toUpperCase() )
        this.gladiators= [];
    }


    gladiators(){
        // return [];
        return `${ this.gladiators }`;
    }

    addGladiator(newGladiator){

        if (this.gladiators.length < 2) {
            this.gladiators.push(newGladiator);
         return console.log (" Successful adding Gladiator ! " );
        
        } else {
            return console.log (" NOT successful adding Gladiator ! ");
        }
           
    }


    fight(){

        if (this.gladiators.length === 2) {

            if ( this.gladiators[0].weapon === this.gladiators[1].weapon ) {
                console.log (" Both eliminated ! ");
                return this.gladiators= [];

            }else if ( (this.gladiators[0].weapon === 'Trident') && (this.gladiators[1].weapon === 'Spear') ) {
                console.log (" Trident eliminated by Spear! ");
                return this.gladiators = [this.gladiators[0] ];
                
            }else if ( (this.gladiators[0].weapon === 'Spear') && (this.gladiators[1].name.weapon  === 'Club') ){
                console.log (" Spear eliminated by Club !");
                return this.gladiators = [this.gladiators[0]];
                
            }else if ( (this.gladiators[0].weapon === 'Club') && (this.gladiators[1].weapon  === 'Trident') ){
                console.log (" Club eliminated by Trident ! ");
                return this.gladiators = [this.gladiators[0] ];
            } 
        }else {
            return console.log (" NO Enough Gladiator ! ");
        }
}


}