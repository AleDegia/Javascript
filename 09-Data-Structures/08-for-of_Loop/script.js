'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPizza: function(mainIngredient, ...otherIngredients)
  {
      console.log(mainIngredient);
      console.log(otherIngredients);
  }
};


const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menu) console.log(item);

//teniamo conto anche del current index (.entries mi permette anche di usare l'index su item)
for(const item of menu.entries()) { //.entries fa si che ogni item diventi un array con index e item
  console.log(`${item[0]+1}: ${item[1]}`);
}

//lo rifaccio uguale ma con la destrutturazione
for(const [i,el] of menu.entries()) {
  console.log(`${i[0]+1}: ${el}`);
}



/*
menu.entries():

The entries() method on an array returns a new Array Iterator object that contains the key/value pairs for each index in the array. Each pair is represented as an array [index, element].
for...of Loop:

The for...of loop iterates over the values of an iterable object, in this case, the iterator returned by menu.entries().
*/