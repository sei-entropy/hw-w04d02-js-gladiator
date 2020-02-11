console.log('its work');
import gladiator from './gladiator.js';
export default class arena extends gladiator {

constructor(name ,gladiators = []){
    super();
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = gladiators;
}

addGladiator(glad){
    if (this.gladiators.length <= 1) {
        this.gladiators.push(glad);
    }
}
removeGladiators(glad){
    this.gladiators.splice(this.gladiators.indexOf(glad),1);
    //this.gladiators.shift(glad);
    console.log('removed');
}

fight(){
    if (this.gladiators[0].name === 'Maximus' ){
         console.log(`${this.gladiators[0].name} win`);
         this.removeGladiators(this.gladiators[0]);
         this.removeGladiators(this.gladiators[1]);
         return;
    } 
    if(this.gladiators[1].name === 'Maximus'){
        console.log(`${this.gladiators[1].name} win`);
         this.removeGladiators(this.gladiators[0]);
         this.removeGladiators(this.gladiators[1]);
         return;
    }
    if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear') {
         console.log(`${this.gladiators[0].name} win`);
         this.removeGladiators(this.gladiators[0]);
         
         this.removeGladiators(this.gladiators[1]);

         return;
    }
    if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Trident') {
         console.log(`${this.gladiators[1].name} win`);
     this.removeGladiators(this.gladiators[0]);
         
         this.removeGladiators(this.gladiators[1]);
          return;
    }
    if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Spear') {
        console.log(`${this.gladiators[1].name} win`);
     this.removeGladiators(this.gladiators[0]);
       
        this.removeGladiators(this.gladiators[1]);
         return;
    }
    if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club') {
        console.log(`${this.gladiators[0].name} win`);
        this.removeGladiators(this.gladiators[0]);
        
        this.removeGladiators(this.gladiators[1]);
         return;
    }
    if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident') {
        console.log(`${this.gladiators[0].name} win`);
        this.removeGladiators(this.gladiators[0]);
       
        this.removeGladiators(this.gladiators[1]);
         return;
    }
    if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Club') {
        console.log(`${this.gladiators[1].name} win`);
        this.removeGladiators(this.gladiators[0]);
        
        this.removeGladiators(this.gladiators[1]);
         return;
    }
if (this.gladiators[0].weapon === this.gladiators[1].weapon){
    console.log('both eliminated');
}}}