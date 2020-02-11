console.log(" Arena work ");


import  Gladiator from "./gladiator.js";
export default  class Arena {

constructor(name){
    this.name= name.toUpperCase();
    this.gladiators = [];
}


addGladiator(newGladiator){
    if (this.gladiators.length < 2){
    this.gladiators.push(newGladiator);
       

}
    else {
        console.log(" already have two gladiators ")
    }

}

fight(){

    if (this.gladiators.length === 2){
    for(let i=0 ; i<this.gladiators.length ; i++){

        if(this.gladiators[i].weapon === this.gladiators[i+1].weapon){
            this.gladiators.pop();
            this.gladiators.pop();
        }
      
        else if  (this.gladiators[i].weapon === "Trident" ){
        if(this.gladiators[i+1].weapon === "Spear"){
           this.gladiators.pop();
        }
        else {
            this.gladiators.shift();
        }}

        else if (this.gladiators[i].weapon === "Spear" ){
            if(this.gladiators[i+1].weapon === "Club"){
                this.gladiators.pop();
            }
            else {
                this.gladiators.shift();
            }}

    }
   

    }

}


}// class end 