import Gladiator from  "./gladiator.js";

export default class Arena {
    constructor(name){
        this.name= name.toUpperCase()
        this.gladiators =[];
    }

    // To add a new Gladiator
    addGladiator(newGlad){
this.gladiators.length <2 ? this.gladiators.push(newGlad) : console.log("You have Two gladiators");
    }


    fight(){
       if(this.gladiators[0].weapon =="Trident" && this.gladiators[1].weapon =="Spear")
       {
           this.gladiators.pop();
       }else if (this.gladiators[0].weapon =="Spear" && this.gladiators[1].weapon =="Club"){
           this.gladiators.pop();
       }

       else if (this.gladiators[0].weapon =="Club" && this.gladiators[1].weapon =="Trident"){
        this.gladiators.pop();
    }
    else if(this.gladiators[1].weapon =="Trident" && this.gladiators[0].weapon =="Spear")
       {
           this.gladiators.pop();
       }else if (this.gladiators[1].weapon =="Spear" && this.gladiators[0].weapon =="Club"){
           this.gladiators.pop();
       }

       else if (this.gladiators[1].weapon =="Club" && this.gladiators[0].weapon =="Trident"){
        this.gladiators.pop();
    }

    }
}
