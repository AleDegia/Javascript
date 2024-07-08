'use strict';

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);     //[1,2,7,8,9]

//invece che scrivere a mano 1 per 1 come il badNewArr uso ...arr
const newArr = [1, 2, ...arr];
console.log(newArr)         //[1,2,7,8,9]

console.log(...newArr)      //[1,2,7,8,9]



//es usando anche il restaurant dei 2 esercizi prima

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
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
          `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
      },
};

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//percio si puo fare cio per prendere un array ed aggiungere un elemento
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu)    //['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// sulla stringa
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);     //['J', 'o', 'n', 'a', 's', ' ', 'S.']

// console.log(`${...str}`);  //non si puo fare

//i prompt prendono il valore ma non serve per forza metterlo dentro una variabile per usarlo
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
    prompt('Ingredient 2?'), prompt('3?')];
console.log(ingredients);

restaurant.orderPasta(...ingredients); //Here is your declicious pasta with f, f and g


//Copiare oggetti
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
Quando si utilizza l'operatore di spread (...) per copiare un oggetto in JavaScript, si crea una shallow copy (copia superficiale) dell'oggetto. 
Questo significa che i valori primiti (come stringhe, numeri e booleani) vengono copiati per valore, mentre gli oggetti e gli array vengono 
copiati per riferimento.
*/
