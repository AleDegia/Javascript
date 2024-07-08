'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring assignment
const [x,y,z] = arr;
console.log(x,y,z); //2 3 4

//Quindi, first e second sono variabili che contengono rispettivamente 'Italian' e 'Vegetarian'.
const [first, , second] = restaurant.categories;
console.log(first, second); //Italian Vegetarian

//riassegnamento col destructuring
[first, , second] = [second, , first];
console.log(first, second); //Vegetarian Italian

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse); //Garlic Bread Pizza

//nested array
const nested = [2, 3, [5, 6]];
const [i, , j] = nested;
console.log(i,j);


/*
const nested = [2, 3, [5, 6]]; definisce un array chiamato nested con tre elementi: il primo è 2, il secondo è 3, e il terzo è un altro array [5, 6].

const [i, , j] = nested; utilizza l'assegnazione tramite destrutturazione per estrarre elementi dall'array nested.

i viene assegnato al primo elemento di nested, quindi i sarà 2.
La virgola vuota , salta il secondo elemento di nested, quindi 3 viene ignorato.
j viene assegnato al terzo elemento di nested, che è l'array [5, 6]. Quindi, j sarà [5, 6].
console.log(i, j); stampa i valori delle variabili i e j, quindi il risultato sarà 2 [5, 6].

In sintesi, il codice destruttura l'array nested, assegnando 2 a i e l'array [5, 6] a j, e poi stampa questi valori.
*/



//Se volessi destrutturare ulteriormente il terzo elemento (l'array [5, 6]), potresti farlo in questo modo:

const [u, , [v, k]] = nested;
console.log(u, v, k); // 2 5 6+



//DESTRUCTURING OBJECTS

