
export default class gladiator {
constructor(name , weapon){

this.name=name;
this.weapon=checkWeapon(weapon);
}


checkWeapon(weapon){
    if( weapon == "Spear" || weapon == "Trident" || weapon == "Club" ){
        console.log(weapon)
    } else {
     console.log('erorr');
    }

}

}
const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"












