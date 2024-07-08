'use strict';

//DESTRCTURING

//spread because ... is on the right side of the =
const arr = [1, 2, ...[3,4]];

//rest operator because on the left side of =
//colleziona gli elementi che sono inutilizzati nel destructuring assignment 
const [a,b,...others] = [1,2,3,4,5]; 
console.log(a,b,others); //1 2 [3,4,5]



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

    orderPizza: function(mainIngredient, ...otherIngredients)
    {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}


const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); //pizza Risotto [Focaccia, Bruschetta, Garlic Bread, Caprese Salad],


//Objects
const {sat, ...weekdays} = restaurant.openingHours; //
console.log(weekdays);


//Functions
const add = function(...numbers){
    console.log(numbers)
};

add(2,3);       //[2,3]
add(5,3,7,2);   //[5,3,7,2]


const add2 = function(...numbers){
    let sum = 0;
    for(let i = 0; 0 < numbers.length; i++)sum+=numbers[i];
    console.log(sum);
};

add(2,3);       //5
add(5,3,7,2);   //17


const x = [23, 5, 7];
add(...x); //passo parametro usando spread operator

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //mushrooms ['onion', 'olives', 'spinach]
//sto collezionando tutti i parametri non usati col rest
