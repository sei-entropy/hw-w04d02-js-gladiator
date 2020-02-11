'use strict'
console.log('Its work !');

// import {getRandom , life} from '/js/helper.js';
// console.log('random Nomber :' ,getRandom());
// console.log('life :',life);
import * as Helper from '/js/helper.js';
// console.log('random Nomber :' , Helper.getRandom());
// console.log('life :',Helper.life);
// console.log('add 1+2 :',Helper.add(1,2));

import Animal from '/js/Animal.js';
import Dog from '/js/Dog.js';
import Cat from '/js/Cat.js';

import ATM from '/js/atm.js';

const myAcount = new ATM('saving',10,5);
myAcount.withdraw(2);
console.log(myAcount.money);
myAcount.withdraw(2);
myAcount.withdraw(10);
console.log(myAcount.backupAccount);
myAcount.withdraw(2);
console.log(myAcount.transactionHistory);

import RecordAlbums from './recordAlbums.js';
const newAlbum = new RecordAlbums('selena','Hi future',['past','I am here','future'],'I am here');
newAlbum.nextSong();
newAlbum.previousSong();
newAlbum.artistName='sata';
console.log(newAlbum.artistName);
console.log(newAlbum.getter());
newAlbum.setter('selena','Hi future2',['past','I am here','future']);
console.log(newAlbum.getter());

// const makeCare =function (Modle,Color){
//     let newCare={  model: Modle,
//                    color: Color,
//                    fuel: 100,
//                    drive: function() {
//                    this.fuel--;
//                    return 'Vroom!';
//                    },
//                    refuel: function() {
//                    this.fuel = 100;
//                   }
//                   }
//     return newCare;              
// };
// const myCar=makeCare('Toyota','black');


//1
// const notMyCat = new Animal ('Joe','Cat',1,'Mooo','Pink');
// console.log(notMyCat.makeSound());
// notMyCat.getOlder();
// console.log(notMyCat.makeSound());

//2 class chiled

// const bear = new Dog ('Bear',3);
// bear.makeSound();

//3 class chiled for a cat


// const cat = new Cat ('snow','3');
// cat.makeSound();
