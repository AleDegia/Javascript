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

  orderPizza: function(mainIngredient, ...otherIngredients)
  {
      console.log(mainIngredient);
      console.log(otherIngredients);
  }
};

//object.keys prende il nome della proprieta di un oggetto
const properties = Object.keys(openingHours);
console.log(properties);    //['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days:`;

for(const day of Objects.keys(openingHours)){
    openStr += `${day},`;
}
//We are open on 3 days: thu, fri, sat,


//property values
const values = Object.values(openingHours);
console.log(values);
// [
//   { open: 12, close: 22 },
//   { open: 11, close: 23 },
//   { open: 0, close: 24 }
// ]


//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
// Output:
// [
//   ['thu', { open: 12, close: 22 }],
//   ['fri', { open: 11, close: 23 }],
//   ['sat', { open: 0, close: 24 }]
// ]

//es destrutturazione oggetto
const entry = ['thu', { open: 12, close: 22 }];
const [day, { open, close }] = entry;
console.log(day);  // 'thu'
console.log(open); // 12
console.log(close); // 22

//per ogni elemento(array) di entries destrutturo
for(const [key, {open, close}] of entries)
{
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}
//On thu we open at 12 and close at 22
//On fri we open at 11 and close at 23
//On sat we open at 0 and close at 24