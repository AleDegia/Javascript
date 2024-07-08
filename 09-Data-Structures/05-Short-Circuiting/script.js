'use strict';

//Se il primo valore in un || è un truthy value verrà immediatamente ritornato quel valore
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas
console.log(undefined || null); //null anche e è falsy


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
}

// restaurant.numGuests = 23; 
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);   //10 (se restaurant.numGuests non era commentato era 23)

//questo fa lo stesso di quello qua sopra ma con sintassi + semplice
const guests2 = restaurant.numGuests || 10;
console.log(guests2);



//AND OPERATOR
//ritorna il falsy value quando al primo valore falsy che becca (sennò ritorna l'ultimo valore della condizione)
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas (perch è l'ultimo valore)

//practical example
if(restaurant.orderPizza){ //verifica se il metodo esiste
    restaurant.orderPizza('mushrooms', 'spinach');
}


//null coaleshing
const guestCorrect = restaurant.numGuests ?? 10


//logical assignment


