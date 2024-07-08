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

  const rest = new Map();
  rest.set('name', 'Classico Italiano'); //riempo il map col set method
  rest.set(1, 'Firenze'); //posso usare + tipi di dati
  console.log(rest.set(2, 'Lisbon')); //stampa il map con ste 3 coppie chiave valore

  rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

  //read values from map
  console.log(rest.get('name')); //Classico italiano

  const time = 21;
  //come dire console.log(rest.get(true));
  console.log(rest.get(time>rest.get('open') && time < rest.get('close'))); //We are open

  console.log(rest.has('categories'));  //true
  rest.delete(2);   //cancella l'array con Lisbon
  console.log(rest.size);

  //retrive values from objects inside map (nel modo sbagliato)
  rest.set([1,2], 'Test');
  console.log(rest.get([1,2])); //undefined (perchè i 2 array non sono lo stesso oggetto)

  /*
  rest.set([1, 2], 'Test') crea un nuovo array in memoria e lo utilizza come chiave nella mappa.
rest.get([1, 2]) crea un altro nuovo array in memoria e tenta di utilizzarlo per recuperare il valore.
Poiché questi due array non sono lo stesso oggetto (anche se hanno gli stessi valori), la mappa non trova una corrispondenza e restituisce undefined.
*/

   //nel modo giusto 
   const arr = [1,2];
   rest.set(arr, 'Test');
   console.log(rest.get(arr));


  /*
  In questo esempio, utilizzi lo stesso array arr come chiave sia per set che per get:
  */

  //fare mappa con il querySelector
  rest.set(document.querySelector('h1'), 'Heading');


  //Maps Iteration
  const question = new Map([
    ['question', 'What is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
  ]);
  console.log(question); //ritorna array di array
  console.log(Object.entries(openingHours)); //anche questo ritorna array di array


  //possiamo percio convertire da oggetto a mappa cosi:
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);


  //per ogni coppia chiave valore stampo se la key è un numero
  //le mappe, come gli array, sono iterabili ma gli oggetti no
  for (const [key, value] of question)
  {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }
  //Answer 1: C
  //Answer 2: Java
  //Answer 3: Javascript


  console.log(question.get(quetion.get('correct') === answer));
  //question.get('correct') recupera il valore associato alla chiave 'correct'. In questo esempio, il valore è 1.
  //La condizione question.get('correct') === answer verifica se il valore recuperato (1) è uguale a answer (1).
  //question.get(true) o question.get(false) viene quindi eseguito, cercando di recuperare il valore associato a quella chiave.


  //Convert map to array con spread operator
  const questionArray = [...question];
  console.log(questionArray);

  //con metodo Array.from
  const questionArray2 = Array.from(question);
  console.log(questionArray2);


