'use strict';

//First-Class Functions
//le funzioni vengono trattate come values (questo perchè le funzioni sono un tipo di oggetto in javascript)

//store functions in variables or properties:
const add = (a, b) => a+b;
const counter = {
    value: 23,
    inc: function(){this.value++;}
}

//possiamo inoltre passare le funzioni come argomento di altre funzioni:
/* const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);*/


//Higher-Order Functions
//Una funzioen che riceve un altra funzione come argomento e ritorna una nuova funzione
function count(){
    let counter = 0;
    return function(){
        counter++;
    };
}


///////////////////////////////////////

/*Una callback function (funzione di richiamata) in JavaScript è una funzione che viene passata come argomento a un'altra 
funzione e viene eseguita (o "richiamata") all'interno di quella funzione.*/


// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase(); /* / /g cerca tutti gli spazi e li sostituisce con ''*/
  };

  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' '); //divido le stringhe, e metto la prima stringa in una var e le altre in un altra
    return [first.toUpperCase(), ...others].join(' '); //rimetto insieme con spazi la prima stringa,ora maiuscolata, con le altre
  };

// Higher-order function
const transformer = function (str, fn) {    //accetta un'altra funzione (fn)(Cioe poi upperFirstWord e oneword)
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`); //chiamo la funzione che sta come parametro
    console.log(`Transformed by: ${fn.name}`); //stampo il nome della funzione
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');    //quando clicco sul body della pagina stampa a console 👋
};
document.body.addEventListener('click', high5); //stiamo passando la callback function 'high5', detta anche eventHandler o eventListener
['Jonas', 'Martha', 'Adam'].forEach(high5); //per ogni elemento dell'array chiamo high5 (stampa 3 👋)


//perchè le callback functions sono cosi utilizzate?
//perche ci permettono di creare livelli di astrazione, ovvero nascondere dei dettagli



///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');    //greeterHey contiene function(name) che viene ritornata con greet('Hey')
greeterHey('Jonas');     //Hey Jonas
greeterHey('Steven');    //Hey Steven

greet('Hello')('Jonas'); //Hello Jonas (è una shortcut diciamo)



//rifaccio usando solo arrow functions                                Es: (param1, param2, ..., paramN) => { statements }
const greeterHey2 = (greeting2) => {(name2)=>{console.log(`${greeting2} ${name2}`);}}
greeterHey('Jonas2');

//Lui l'ha fatto cosi:
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');



///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //pusho un oggetto con 2 parametri
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
  
const book = lufthansa.book;  //assegno la funzione alla variabile

// Does NOT work (perchè ora è una funzione normale e la this keywork perciò punta a undefined)
// book(23, 'Sarah Williams');

/*
Contesto di this:
In JavaScript, il valore di this dipende dal modo in cui una funzione viene chiamata. 
Quando una funzione è chiamata come metodo di un oggetto, this si riferisce a quell'oggetto. 
Tuttavia, quando una funzione è chiamata da sola, this è undefined in strict mode (o l'oggetto globale in modalità non strict).
*/

// Call method (qua è call a chiamare la funzione book, col this keyword che è eurowings)
book.call(eurowings, 23, 'Sarah Williams'); //possiamo cosi impostare manualmente il this keyword delle funzioni che chiamiamo
console.log(eurowings); //{airline: 'Eurowings', iataCode: 'EW', bookings: Array(1)}

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa); //{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}


//usare metodo di un oggetto per un altro oggetto (il metodo call permette di specificare esplicitamente il valore di this)
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); //Mary Cooper booked a seat on Swiss Air Lines flight LX583


// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); //George Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss);
book.call(swiss, ...flightData); //stessa cosa di book.apply



///////////////////////////////////////
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

/*
La funzione bind crea una nuova funzione che, quando invocata, ha il suo valore this fissato a un valore specificato. 
Questo è utile quando vuoi passare una funzione come callback o usarla in un contesto dove il valore di this potrebbe cambiare.
! IL PRIMO ARGOMENTO DI BIND é THIS !
*/

const bookEW = book.bind(eurowings);  //eseguo funzione book di lufthansa su ogg eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');  //Steven Williams booked a seat on Eurowings flight EW23

//contesto (this) è fissato all'oggetto eurowings e il primo argomento (flightNum) del metodo book è preimpostato a 23.
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); //Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper');     //Martha Cooper booked a seat on Eurowings flight EW23



//With event listeners
lufthansa.planes = 300; //aggiungo nuova proprietà al luthansa object
lufthansa.buyPlane = function () {
  console.log(this);  //stampa oggetto lufthansa

  this.planes++;
  console.log(this.planes);
};


//negli event listener la this keyword punta all'event handler (al bottone qui, vedi sotto)
document.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //uso il bind perchè devo passare una funzione e non chiamarla come col call


/*
Contesto del this negli Event Listener
Quando assegni una funzione come event listener, il this all'interno di quella funzione punta all'elemento DOM che ha ricevuto l'evento,
non all'oggetto dal quale è stata chiamata la funzione. Nel tuo caso, il this punterebbe al bottone .buy.

Esempio senza bind
Se aggiungi l'event listener senza bind:

document.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane);
Quando clicchi sul bottone .buy, il valore di this all'interno della funzione buyPlane sarà l'elemento del DOM (il bottone), 
non l'oggetto lufthansa. Questo causerà problemi, poiché il this.planes all'interno di buyPlane cercherà di accedere 
alla proprietà planes dell'elemento DOM, che non esiste.
*/


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23); //è come se ritornassi uan nuova funzione dall'addTax
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

/*
L'uso di bind in questo contesto permette di creare una nuova funzione addVAT che ha il primo argomento (rate) preimpostato a 0.23. 
In questo modo, addVAT diventa una funzione che accetta solo un argomento (value)
*/


//un sinonimo di cio che abbiamo fatto col bind qui sopra:
function addVAT(value) {
  return addTax(0.23, value);
}

//creare una funzione che faccia quello che fa addVAT
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));