'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
  
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//displayo tutti i movimenti dell'array nell'html, in base a se sono depositi o ritiri
const displayMovements = function(movements){
    containerMovements.innerHTML = '';
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
            <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i+1}</div>
            <div class="movements__value">${mov}</div>
            </div>
        `;
        //accetta 2 stringa, la prima è la posizione in cui mettere l'html e la seconda è la stringa contenente l'html
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);


/*
La funzione displayMovements prende un solo parametro:
movements: un array di movimenti (numeri), che rappresentano le transazioni del conto bancario.
I valori positivi rappresentano i depositi e i valori negativi rappresentano i prelievi.
Iterazione sui Movements: Utilizza il metodo forEach per iterare su ogni elemento dell'array movements.

La funzione di callback associata a forEach prende due parametri:
mov: il valore corrente del movimento (deposito o prelievo).
i: l'indice del movimento corrente.

Determinazione del Tipo di Movimento:
Controlla se il movimento è positivo o negativo.
Se il movimento (mov) è maggiore di 0, il tipo è 'deposit' (deposito).
Altrimenti, il tipo è 'withdrawal' (prelievo).

Crea una stringa html che contiene il codice HTML per visualizzare il movimento.
Usa il template literal per creare dinamicamente il codice HTML, includendo il tipo di movimento e il suo valore.

Inserimento del Contenuto HTML nel DOM:

Usa il metodo insertAdjacentHTML per inserire il codice HTML creato nel container dei movimenti (containerMovements).
L'HTML viene inserito all'inizio del container ('afterbegin'), quindi i movimenti più recenti saranno visualizzati in cima alla lista.
*/