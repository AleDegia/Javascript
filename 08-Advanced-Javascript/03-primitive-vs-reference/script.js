'use strict';

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);  //Davis Williams

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica; //marriedJessica conterrà l'indirizzo di 'jessica'
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);   //Davis in entrambi
console.log('After marriage:', marriedJessica); 


//copiare oggetti
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica);   //Williams
console.log('After marriage: ', marriedJessica);   //Davis

jessicaCopy.push('Mary');      
jessicaCopy.push('John');
console.log('Before marriage:', jessica2);	//Mary e John sono anche qui
console.log('After marriage: ', jessicaCopy);
//questa metodologia va bene solo se non si lavora su oggetti dentro l'oggetto copiato