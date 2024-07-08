'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close:22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    },

    order: function (starterIndex, mainIndex){
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    //facciamo subito destructuring
    orderDelivery: function({starterIndex, mainIndex, time, address})
    {
        console.log(`Order received! ${this.starterMenu[starterIndex]}
            and ${this.mainMenu[mainIndex]} will be deliered to ${address} at ${time}`);
    }
};

//questo crea 3 nuove variabili
const {name, openingHours, categories} = restaurant; //Classico italiano, ogg1, ogg2
console.log(name, openingHours, categories);

//faccio stesso di qua sopra ma rinomino anche le variabili
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, openingHours, categories) //stesso output

//se menu non esiste nell'oggetto restaurant, allora menu verrà inizializzato con un array vuoto, idem per l'altro
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters); // stampa [] e ogg starterMenu

//mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
//assegno a e b dell'oggetto obj ad a e b let
({a, b} = obj); //usando nomi diversi da a e b non funzionerebbe..
console.log(a, b)

//nested objects (sto prendendo open e close di fri)
const {fri: {open, close},} = openingHours;
console.log(open, close);

//stesso col rename
const {fri: {open:o, close:c},} = openingHours;
console.log(o, c);

//chiamo la funzione passando un oggetto
restaurant.orderDelivery({
    time: '22.30',
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2
})