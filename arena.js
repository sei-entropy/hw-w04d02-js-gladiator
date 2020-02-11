

class Arena {
constructor(name){
    this.name=name.charAt().toUpperCase()+name.slice(1,name.length-1);
    this.gladiator=[];
}
addGladiator(gladiator){
    this.gladiator=gladiator;
}
fight(){
    if(this.gladiator.length===2){
       if(this.gladiator[0].weapon==='Trident'&&this.gladiator[1].weapon==='Spear')  
       {this.gladiator.splice(1)}else
       if(this.gladiator[1].weapon==='Trident'&&this.gladiator[0].weapon==='Spear')  
       {this.gladiator.splice(0)}else
       
       if(this.gladiator[0].weapon==='Spear'&&this.gladiator[1].weapon==='Club')  
       {this.gladiator.splice(1)}else
       if(this.gladiator[1].weapon==='Spear'&&this.gladiator[0].weapon==='Club')  
       {this.gladiator.splice(0)}else

       if(this.gladiator[0].weapon==='Club'&&this.gladiator[1].weapon==='Trident')  
       {this.gladiator.splice(1)}else
       if(this.gladiator[1].weapon==='Club'&&this.gladiator[0].weapon==='Trident')  
       {this.gladiator.splice(0)}
     console.log(this.gladiator);
    }else {console.log('there are one or no gladiator! can not make a faght :(');}
}
}