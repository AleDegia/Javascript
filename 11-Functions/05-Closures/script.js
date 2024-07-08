'use strict';

 //Le closure in JavaScript (e in molti altri linguaggi di programmazione) permettono a una funzione di ricordare il contesto 
 //in cui è stata creata, incluso l'accesso alle variabili che erano presenti in quel contesto.
 //Questo significa che una closure "cattura" le variabili locali dalla sua scope esterna, mantenendole vive anche dopo che 
 //la funzione esterna è stata eseguita.

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();     //1 passengers
booker();     //2 passengers
booker();     //3 passengers


//l'execution context della funzione secureBooking non è piu nel call stack, perchè ha gia finito l'esecuzione.
//Ogni funzione però ha sempre accesso al variable environment dell'execution context in cui la funzione è stata creata.

/*
Quando una funzione viene eseguita in JavaScript, viene creato un execution context. Ogni execution context ha due componenti principali:

Variable Environment: Contiene tutte le variabili locali della funzione e i relativi valori.
Lexical Environment: È una struttura che contiene il Variable Environment e una reference all'outer environment, ovvero l'ambiente lessicale 
in cui la funzione è stata definita.

Closure e Accesso al Variable Environment
Una closure è una funzione che "ricorda" il lexical environment in cui è stata creata. 
Questo significa che ha accesso a tutte le variabili nel variable environment del contesto di esecuzione in cui è stata definita, 
anche dopo che tale contesto ha terminato l'esecuzione.
Perciò anche se l'execution context viene distrutto al termine della funzione padre, il suo variable environment resta presente nell'engine.
Nel variable environment ci saranno sia le variabili dichiarate li che gli argomenti della funzione.
Quando chiamo booker() l'engine prima guarda al variable environment della funzione padre e poi al global execution context
*/



//esempio 2:

const secureBooking2 = function () {
  return function () {
    let passengerCount = 0;
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker2 = secureBooking2();

booker2();     // 1 passengers
booker2();     // 1 passengers
booker2();     // 1 passengers

console.dir(booker);    //vedro in [[Scopes]] -> Closure


/*
Variabile passengerCount locale: All'interno della funzione ritornata da secureBooking, hai dichiarato passengerCount utilizzando let. 
Questa dichiarazione fa sì che passengerCount sia una variabile locale alla funzione interna. 
Ogni volta che chiami booker(), la funzione interna viene eseguita nuovamente, e quindi passengerCount viene reimpostata a 0 ad ogni chiamata.

Closure: La funzione ritornata da secureBooking ha accesso alla variabile passengerCount all'interno del suo contesto, 
anche dopo che secureBooking ha terminato l'esecuzione. Tuttavia, poiché passengerCount viene dichiarato nuovamente ad ogni 
chiamata della funzione ritornata, questo comporta che passengerCount inizia sempre da 0 e viene incrementato a 1 ad ogni chiamata di booker().
*/




///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); //'a' sarà 23 e la var f diventerà l altra funzione, che però non sarà chiamata
f(); //46

// Re-assigning f function
h();  //f diventa una funzione che stampa 1554
f();  //1554
console.dir(f); //qua vediamo che la closure adesso ha il valore di 'b' e non piu di 'a'




//Example 2:

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    // questa è una closure perché accede e utilizza le variabili n e perGroup definite nella funzione esterna boardPassengers
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); //la funzione viene eseguita, una volta chiamata, dopo 'wait' secondi

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);


/*
setTimeout è una funzione integrata in JavaScript che consente di eseguire una funzione o una porzione di codice dopo 
un intervallo di tempo specificato. Funziona in modo asincrono, il che significa che non blocca l'esecuzione del codice 
successivo mentre attende che scada il tempo impostato.

setTimeout(function, delay, arg1, arg2, ...);
function: La funzione che deve essere eseguita dopo il ritardo.
delay: Il tempo di ritardo in millisecondi (1000 ms = 1 secondo).
arg1, arg2, ... (opzionale): Argomenti che possono essere passati alla funzione quando viene eseguita.
*/

//altro esempio

function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
      console.log(outerVariable); // Ha accesso a outerVariable grazie alla closure
  }
  
  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Stampa "I am outside!"


/*
Quando outerFunction viene chiamata, viene creato un nuovo execution context per outerFunction.
All'interno di questo execution context, viene creato un variable environment che contiene outerVariable.
outerFunction definisce innerFunction e restituisce innerFunction.
Quando outerFunction termina la sua esecuzione, il suo execution context di solito verrebbe distrutto, ma poiché innerFunction è stata restituita e può essere chiamata successivamente, innerFunction "ricorda" il suo lexical environment, cioè il variable environment di outerFunction.
Quando myFunction (che è innerFunction) viene chiamata, ha ancora accesso a outerVariable perché innerFunction è una closure e "ricorda" 
il variable environment in cui è stata creata.
La closure da ad una funzione accesso a tutte le variabili della sua funzione padre, anche dopo che la funzione padre è stata ritornata.
La funzione mantiene un reference al suo outer scope (lo scope della funzione padre)
*/






//Closure challenge


/*
Take the IIFE below and at the end of the function, attach an event listener that changes the color of 
the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
*/

(function(){
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue';
  })
})();


/*
la funzione IIFE viene eseguita e aggiundo l'event listener ma quando viene eseguito 
devo accedere a header che è una const dichiarata nella funzione padre( IIFE) percio avverrà una closure
per recuperare la variabile 
*/



