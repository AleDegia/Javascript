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


console.log(restaurant.openingHours.mon); //undefined (se non c'è il dato nell ogg)
//console.log(restaurant.openingHours.mon.open); //errore perchè accedo a qualocsa di un undefined
console.log(restaurant.openingHours.fri.open); //11

//leviamo l'errore
if(restaurant.openingHours.mon)//esegue solo se la proprietà esiste
{
  console.log(restaurant.openingHours.mon.open)
}

//con optional chaining (open viene letto solo se mon esiste, perciò se non è null o undefiend)
console.log(restaurant.openingHours.mon?.open)

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days)
{
  console.log(day);
  //uso brakets notation per accedere alla proprieta 'day' dell ogg restaurant.openingHours
  //La notazione con il punto (dot notation) richiede che il nome della proprietà sia noto e statico, cioè deve essere scritto letteralmente nel codice.
  const open = restaurant.openingHours[day]?.open;  //col ? non da errore
  console.log(`On ${day}, we open at ${open}`);
}

/*
mon
On mon, we open at undefined
tue
On tue, we open at undefined
wed
On wed, we open at undefined
thu
On thu, we open at 12
fri
On fri, we open at 11
sat
On sat, we open at 0
sun
On sun, we open at undefined
*/
