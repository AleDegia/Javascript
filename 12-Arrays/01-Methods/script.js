'use strict';

//arrays areobjects and have access to special built in methods


//SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));          //['c', 'd', 'e']
console.log(arr.slice(2,4));        //['c', 'd']
console.log(arr.slice(-2));         //['d', 'e'] (dal elemento -2 fino in fondo)
console.log(arr.slice(-1));         //['e'] 
console.log(arr.slice(1,-2));       //['b', 'c']
console.log([...arr]);              //['a', 'b', 'c', 'd', 'e']


//SPLICE   ->   come splice ma cancella dall'array originale invece che estrarre
console.log(arr.splice(2))          //['c', 'd', 'e']
console.log(arr)                    //['a', 'b']  -> cancella l' array originale 
console.log(arr.splice(-1));        //['b']
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1,2));       //['b', 'c'] -> il primo incluso eil secondo anche


//REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];   
console.log(arr2.reverse());        //['f', 'g', 'h', 'i', 'j']
console.log(arr2);                  //['f', 'g', 'h', 'i', 'j']  ->   muta l'array originale

// CONCAT                           //per concatenare 2 array
const letters = arr.concat(arr2);
console.log(letters);               //['a', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]);     //['a', 'd', 'e', 'f', 'g', 'h', 'i', 'j']  (fa stessa cosa di sopra)

// JOIN     ->     crea stringa
console.log(letters.join(' - '));   //a - d - e - f - g - h - i - j



// The new at Method
const arr3 = [23, 11, 64];
console.log(arr3[0]);           //23
console.log(arr3.at(0));        //23


// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);          //con arr.slice(-1) restituisce un array con 64, con [0] recupero solo 64
console.log(arr.at(-1));




// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

/*
Movement 1: You deposited 200
Movement 2: You deposited 450
Movement 3: You withdrew 400
Movement 4: You deposited 3000
Movement 5: You withdrew 650
Movement 6: You withdrew 130
Movement 7: You deposited 70
Movement 8: You deposited 1300
*/


//FOREACH
//è il forEach chiama la callback function
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});
// Il risultato sarà identico alla funzione sopra


/*
In JavaScript, quando si utilizzano i metodi di iterazione degli array, la funzione di callback accetta sempre i parametri 
nell'ordine specificato:

currentValue (elemento corrente)
index (indice corrente)
array (intero array)

!non puoi fare break sul foreach loop, ma solo col forof loop!
!nota che invece nella prima funzione quando uso .entries il primo valore è l'index ed il secondo l'elemento!
*/




//FOREACH con Maps e Sets

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound']
]);

currencies.forEach(function(value, key, map)
{
    console.log(`${key}: ${value}`);
});

/*
USD: United States Dollar
EUR: Euro
GBP: Pound
*/



//SET
const currenciesUnique = new Set (['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);  //{'USD', 'GBP', 'EUR'}
currenciesUnique.forEach(function(value, key, map)
{
    console.log(`${key}: ${value}`);
});

/*
USD: USD
GBP: GBP
EUR: EUR
*/
//questo avviene perchè in un set il secondo parametro è sempre value-
//riscrivo meglio:


currenciesUnique.forEach(function(value) {
    console.log(value);
});

/*
USD
GBP
EUR
*/




//Altri metodoi degli array: MAP; FILTER e REDUCE

//Map:  
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

//questo fa la stessa cosa ma usa il for al posto del metodo map
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//con map   (per ogni elemento la callback ritorna una stringa che lo descrive)
//map è usato per trasformare ogni elemento di un array in un nuovo elemento restituendo un nuovo array di elementi trasformati.
const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
/*
 ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300']
*/