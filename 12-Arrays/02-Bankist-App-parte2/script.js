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
            <div class="movements__value">${mov}€</div>
            </div>
        `;
        //accetta 2 stringa, la prima è la posizione in cui mettere l'html e la seconda è la stringa contenente l'html
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);


//Il metodo map applica una funzione su ciascun elemento di un array e ritorna un nuovo array con i risultati.
// l'argomento della funzione passata a map è sempre l'elemento singolo su cui map sta iterando in quel momento.

const user = 'Stheven Thomas Williams';

const createUsernames = function(user)
{
  const username = user.toLowerCase().split(' ').map(function(name)     //per ogni stringa ritorno la prima lettera
  {
    return name[0];
  }).join('');
  return username;
}
//console.log(username);  //['stheven', 'thomas', 'williams']     ->  quando era solo con lo split..
//console.log(username);  //['s', 't', 'w']                       -> quando era senza il join
//console.log(username);    //stw                                 -> mette tutto dentro createUsernames perciò non posso piu accederci..
console.log(createUsernames('Stheven Thomas Williams'));          //stw


//continuo la funzione di sopra che ora accetterà un array di oggetti al posto della stringa
const createUsernames2 = function(accs)
{
  accs.forEach(function(acc){ //per ogni array
    //crea la prop username nell'arrya dato che non esiste, e ci mette dentro le iniziali di acc.owner dell'array
    acc.username = acc.owner.toLowerCase().split(' ').map(function(name)
    {
      return name[0];
    }).join('');
  })
};
createUsernames2(accounts);
console.log(accounts);  //4 arrays




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Filter method
const deposits = movements.filter(function(mov){
  return mov>0;
});
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits);  //[200, 450, 3000, 70, 1300]

//Stessa cosa ma con for loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//Filtro i numeri negativi
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


//Reduce Method
//(nel reduce l'accumulator è il primo parametro, L'accumulatore parte con il valore iniziale che fornisci come secondo argomento
//a reduce. Nel tuo caso, questo valore è 0. L'accumulator prende il valore risultante dall'iterazione precedente e lo mantiene durante le iterazioni successive. 
const balance = movements.reduce(function(accumulator, current, i, array)
{
  console.log(accumulator);     //0 poi 200 poi 650 poi 250 poi 3250...
  return accumulator + current
}, 0);  //questo è il valore iniziale (0) dell accumulator
console.log(balance);

//col for 
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Faccio la somma dei movimenti del conto e la metto nel balance
const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(movements);


// Maximum value of movements array     ()
const maximumValue = function (movements) {
  return movements.reduce(function (acc, mov) {
    return mov > acc ? mov : acc;
  }, movements[0]); // Initialize accumulator to the first element in the array
};

console.log(maximumValue(movements)); // Should print the maximum value

/*
The reduce method starts the reduction based on the initial value provided for the accumulator.
If an initial value is provided, the accumulator starts with that value, and the iteration starts from the first element of the array.
If no initial value is provided, the accumulator starts with the first element of the array, and the iteration starts from the second element.
Dopodichè il valore di return della reduce function lo assume sempre l'accumulator ad ogni iterazione.
First Iteration:acc = 200, mov = 450, acc becomes 450 because 450 > 200.
Second Iteration:acc = 450, mov = -400, acc remains 450 because -400 < 450.
Third Iteration:acc = 450, mov = 3000, acc becomes 3000 because 3000 > 450.
*/


//converto i depositi da eur a usd (MAP)
const eurToUsd = 1.1;
const totalDepositsUsd = movements.filter(mov => mov > 0) //ritorna i mov maggiori di 0 (i depositi)
        .map(mov => mov*eurToUsd)                         //itera 1 a 1 e fa un nuovo array coi mov convertiti in dollari
        .reduce((acc, mov) => acc + mov, 0);              //Riduce l'array in un singolo valore sommando tutti gli elementi.
console.log(totalDepositsUsd);                            //totale depositi convertito in dollari

//stessa cosa ma non converto in usd e displayo nell html
const calcDisplaySummary = function(movements){
  const incomes = movements.filter(mov => mov>0)    //somma depositi
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements.filter(mov => mov<0)      //somma prelievi
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = movements.filter(mov => mov > 0)   //sui depositi
    .map(deposit => (deposit*1.2)/100)    //calcolo interesse di 1.2% per ogni deposito e sommo col reduce
    .reduce((acc, int) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(movements);