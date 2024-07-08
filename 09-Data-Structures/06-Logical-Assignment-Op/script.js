'use strict';

const rest1 = {
    name: 'Capri',
    numGuests: 20
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

rest1.numGuests = rest1.numGuests || 10; //ritorna numGuests se è truthy senno 10
rest2.numGuests = rest2.numGuests || 10; //ritorna numGuests se è truthy senno 10

console.log(rest1); //numGuests  = 20
console.log(rest2); //numGuests = 10

//assegna il valore se la var è falsy
rest1.numGuests ||=10;

//nullish assignment operator (assegna il valore alla variabilie se essa è nullish)
rest2.numGuests ??= 10;
console.log(numGuests); //10 perchè numGuests è undefined