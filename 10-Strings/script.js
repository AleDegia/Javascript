'use strict';

const airline = 'TAP air Portugal';
const plane = 'A320';

console.log(plane[0]) //A
console.log(airline.length); //16

console.log(airline.indexOf('r'));//6 (iniziano da 0)
console.log(airline.lastIndexOf('r'));//10
console.log(airline.indexOf('Portugal'))//8


//extract part of a string
console.log(airline.slice(4));//air Portugal (4 è la lettera dalla quale parte l'estrazione)
console.log(airline.slice(4,7));//air (dal carattere 4 incluso al 7 escluso, basta contarli..)
console.log(airline.slice(0, airline.indexOf(' ')))//TAP (da 0 incluso al primo spazio escluso)
console.log(airline.slice(airline.lastIndexOf(' ')+1))//Portugal (da ultimo spazio incluso alla fine)

console.log(airline.slice(-2))//al

const checkMiddleSeat = function(seat){
    //B and E are middle seats
    const s = seat.slice(-1);
    if(s==='B' || s==='E')
        console.log('You got the middle seat');
    else console.log('You got lucky');
};

checkMiddleSeat('11B'); //you got the middle seat
checkMiddleSeat('23C'); //you got lucky

/*siamo in grado di chiamare metodi sulle stringhe perchè Javascrict conerte lo string primitive
a javascript object automaticamente. questè processo è detto boxing, perche prende la stringa 
e la mette in un box.
Una volta finito il metodo esso tornerà comunque uan string primitive*/
console.log(new String('jonas'));//boxing
console.log(typeof new String('jonas')); //object
console.log(typeof new String('jonas').slice(1)); //string


console.log(airline.toLowerCase());

//Fix capitalization in name
const passanger = 'jOnAs';
const passangerLower = passanger.toLowerCase();//jonas
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);//Jonas


//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.io';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //levo gli spazi vuoti
console.log(trimmedEmail);

//Stessa cosa ma tutto in uno
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
//comparo
console.log(email === normalizedEmail); //true


//Replacing part of strings
const priceGB = '288,98£';
const priceUS = priceGB.replace('£','$').replace(',', '.');
console.log(priceUS);  //288.98$


const announcement = 'All passangers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //All passangers come to barding gate 23. Boarding door 23!
//come le rimpiazzo entrambe?
console.log(announcement.replaceAll('door', 'gate')); //All passangers come to barding gate 23. Boarding gate 23!


//Regular expressions (fa la stessa cosa di qua sopra)
console.log(announcement.replace(/door/g, 'gate')); //All passangers come to barding gate 23. Boarding gate 23!

/*
/door/: È un'espressione regolare che cerca la parola "door".
g: È un flag che sta per "globale" e indica che la sostituzione deve avvenire per tutte le occorrenze di "door" nella stringa, non solo la prima.
'gate': È la stringa di sostituzione. Ogni occorrenza di "door" verrà sostituita con "gate".
*/

//Booleans (startsWith method)
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('Boeing')); //false
console.log(plane2.includes('Air'));    //true
console.log(plane2.includes('Aib'));    //false

if(plane2.startsWith('Airbus')&& plane2.endsWith('neo'))
{
    console.log('Part of the new airbus family');   //Part of the new airbus family
}

/*
I metodi startsWith ed endsWith in JavaScript sono utilizzati
per determinare se una stringa inizia o termina con una specifica sequenza di caratteri.
*/


//Practice excercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
  
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are NOT allowed on board');
    } else {
      console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); //You are NOT allowed on board
checkBaggage('Socks and camera');                              //Welcome aboard!
checkBaggage('Got some snacks and a gun for protection');      //You are NOT allowed on board



//SPLIT method (restituisce array)
console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
console.log('Jonas Schmedtmann'.split(' ')); //['Jonas', 'Schmedtmann']

//ora destrutturiamo
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' '); //Jonas e Schmedtmann ora sono in 2 variabili



//JOIN method (da array a stringa tramite separatore specificato)
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mr. Jonas SCHMEDTMANN


//esercizio capitalizziamo nome
const capitalizeName = function (name) {
    const names = name.split(' '); //divido l'argomento della funzione in array di stringhe
    const namesUpper = [];
  
    for (const n of names) {
      // namesUpper.push(n[0].toUpperCase() + n.slice(1));
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));//metto ogni stringa in un nuovo array ma con prima lettera maiuscola
    }
    console.log(namesUpper.join(' ')); //trasformo l'array in stringa
};
  
capitalizeName('jessica ann smith davis'); //Jessica Ann Smith Davis
capitalizeName('jonas schmedtmann'); //Jonas Schmedtmann



//PADDING a string (aggiungo caratteri)
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); //++++++Go to gate 23!++++++++++
console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); //+++++++++++++++Jonas++++++++++


//exercise: mascheriamo i numeri della carta di credito
const maskCreditCard = function (number) {
    const str = number + '';    //converto a stringa
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836)); //****7836
console.log(maskCreditCard(43378463864647384)); //*************7384


//Repeat method
// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5)); //ripete la stringa x 5 volte..

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5); //There are 5 planes in line 🛩🛩🛩🛩🛩
planesInLine(3);
planesInLine(12);



//Coding challenge


/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/



//come l ho fatto io (commento con /*)

/*

const convertedStrings = function(...strings){
    console.log(strings);
    for(const s of strings)
    {
    const names = s.split(','); //divido l'argomento della funzione in array di stringhe
    
    const namesCamelCase= [];
    let indice_ = 0;
    for (const n of names) {
        indice_ = n.indexOf('_');
        const caratteremaiusc = (n.replace(n[indice_+1], n[indice_+1].toUpperCase()));//metto ogni stringa in un nuovo array ma con prima lettera maiuscola
        namesCamelCase.push(caratteremaiusc.replace('_', ''));
      }
      console.log(namesCamelCase.join(' ')); //trasformo l'array in stringa
    }
}

//convertedStrings('ciao_bella','ciao_Ciao'); (devi scrivere cio nel textarea)

const btn = document.querySelector('.bottone');

btn.addEventListener('click', function () {
    const contenutoTextarea = document.querySelector('.testoarea').value;
   convertedStrings(contenutoTextarea);
});

*/



//Come l'ha fatto lui:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n'); //separa la stringa sulla base degli a capo in un array di stringhe

    for(const [i, row] of rows.entries()) //per ogni stringa (i è lindice che uso grazie al .entries)
    {
        const [first, second] = row.toLowerCase().trim().split('_'); //divido in 2 parole la stringa e poi metto in 2 variabili
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase(),
        )}`;
        console.log(`${output.padEnd(20)} ${':)'.repeat(i+1)}`);
    }
});

/* da testare con cio:
underscore_Case
first_Name
some_Variable
calculate_Age
delayed_Departure
*/




//ES 2 stringhe, formattare bene


// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const arrayStringhe = flights.split(';'); //converto stringa in array di stringhe
// const setStringhe = new Set (arrayStringhe); //poi in set per levare i duplicati
// let arrayStringhe2 = [...setStringhe]; //e di nuovo in array

// for(let [i,str] of arrayStringhe2.entries()){ //itero su ogni stringa dell array
//   const firstChar = str.charAt(0); 
//   const isLetter = (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z');
//   const isNumber = (firstChar >= '1' && firstChar <= '9');
//   const isPlus = (firstChar=== '+');
//   const isUnderscore = (firstChar=== '_');
//   if (isLetter) { // Se il primo carattere della stringa è una lettera
//     const newString = str.slice(0, 3);
//     arrayStringhe2[i] = newString;
//   } else if (isNumber) {
//     const newString = str.slice(5);
//     arrayStringhe2[i] = newString;
//   } else if (isPlus) {
//     const newString = str.slice(1);
//     arrayStringhe2[i] = newString;
//   } else if (isUnderscore) {
//     const newString = str.slice(1);
//     arrayStringhe2[i] = newString;
//   }
// }


// console.log(arrayStringhe2);




const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightBlocks = flights.split('+'); //Separo tramite i +

for (const flight of flightBlocks) {
  const [status, from, to, time] = flight.split(';'); //separo tramite i le stringhe e le assegno alle variabili;

// console.log(status); // '_Delayed_Departure'
// console.log(from);   // 'fao93766109'
// console.log(to);     // 'txl2133758440'
// console.log(time);   // '11:25'
  
  const firstChar = status.charAt(0);
  const isUnderscore = (firstChar === '_');

  if (isUnderscore) {
    const output = `${status.startsWith('_Delayed') ? '🔴' : ''} ${status.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`;
    console.log(output);
  } else {
    console.log(`Other: ${status}`);
  }
}


/*
${status.startsWith('_Delayed') ? '🔴' : ''}:

Questa parte utilizza l'operatore ternario per verificare se la stringa status inizia con '_Delayed'.
Se status inizia con '_Delayed', viene aggiunto il simbolo 🔴.
Altrimenti, viene aggiunta una stringa vuota ''.
${status.replaceAll('_', ' ')}:

Questa parte sostituisce tutti i caratteri di sottolineatura (_) nella stringa status con spazi ( ).
Ad esempio, '_Delayed_Departure' diventa 'Delayed Departure'.
from ${from.slice(0, 3).toUpperCase()}:

Questa parte prende i primi tre caratteri della stringa from e li converte in lettere maiuscole.
Ad esempio, 'fao93766109' diventa 'FAO'.
La stringa risultante viene poi combinata con la parola from.
to ${to.slice(0, 3).toUpperCase()}:

Simile a from, questa parte prende i primi tre caratteri della stringa to e li converte in lettere maiuscole.
Ad esempio, 'txl2133758440' diventa 'TXL'.
La stringa risultante viene poi combinata con la parola to.
(${time.replace(':', 'h')}):

Questa parte sostituisce il carattere : nella stringa time con la lettera h.
Ad esempio, '11:25' diventa '11h25'.
La stringa risultante viene poi inclusa tra parentesi.
*/