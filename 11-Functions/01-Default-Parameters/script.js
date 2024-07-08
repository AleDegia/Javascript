'use strict';

const bookings = [];

//Se non vengono passati quando si chiama la funzione, numPassengers sarà 1 e price sarà 199 moltiplicato per il numero di passeggeri.
const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
    //ES5 (lo faccio mettendo dei default values qui sopra per i parametri)
    // numPassengers = numPassengers || 1;     //short circuiting
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);


//-------

//Passare argomenti alle funzioni (review di lezione passata)
const flight = 'LH234'; //numero volo
const jonas = {         //passeggero
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
  };

  const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';    //do valori differenti 
    passenger.name = 'Mr. ' + passenger.name;
  
    if (passenger.passport === 24739479284) {   //verifico il passaporto (simulo check-in)
      alert('Checked in');
    } else {
      alert('Wrong passport!');
    }
  };

checkIn(flight, jonas);
console.log(flight);        //LH234
console.log(jonas);         //{name: 'Mr. Jonas Schmedtmann', passport: 24739479284}

//Perchè i valori non cambiano?

/*
I valori non cambiano nel caso del numero di volo flight perché è un tipo primitivo (una stringa), e in JavaScript 
i tipi primitivi vengono passati per valore alle funzioni.
Ciò significa che quando flight viene passato alla funzione checkIn, viene creata una copia del valore 'LH234' e 
assegnata alla variabile locale flightNum all'interno della funzione. Qualsiasi modifica fatta a flightNum all'interno della 
funzione non influenzerà la variabile globale flight

il motivo per cui il nome del passeggero jonas viene modificato è dovuto al fatto che jonas è un oggetto, e in JavaScript gli 
oggetti vengono passati per riferimento alle funzioni. Quando passi un oggetto a una funzione, la funzione opera direttamente 
sull'oggetto originale, non su una copia. Quindi, quando modifichi passenger.name all'interno della funzione checkIn, 
stai modificando direttamente l'oggetto jonas che è stato passato alla funzione.
*/


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
  };
  
  newPassport(jonas); //questo modificherà il numero del passaporto di Jonas
  checkIn(flight, jonas); //farà l'alert wrong passport perchè ho cambiat il numero


  //javascript non ha il passing by reference, anche se per gli oggetti passiamo un reference ma è valutato come un valore 
  //di un address in memoria diciamo