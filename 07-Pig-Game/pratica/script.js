'use strict';

//se becco l'uno o se premo hold deve toccare all'altro, chi raggiunge prima 100 punti vince

//selecting elements
const player0El = document.querySelector('.player--0');     //seleziono player
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');       //score della partita per arrivare a 100
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');   //score del turno finche non holdo o becco 1
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;   //0 è il player a sinistra, 1 è il player a destra

//aggiungo event listener al bottone per lanciare il dado
btnRoll.addEventListener('click', function(){
  //genero random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  
  //cambio immagine del dado in base al numero uscito
  diceEl.src = `dice-${dice}.png`;

  //se il numero uscito non è 1 
  if(dice!== 1)
  {
    //add to current score
    currentScore += dice;
    // current0El.textContent = currentScore; //seleziono invece dinamicamente lo score dell'active player
    document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
  }
  //se il numero uscito è 1 resetto score del turno e tocca all altro player
  else  
  {
    //metto lo score dell'active player = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0; //setto la variabile a 0
    //se l'avtive player è 0 allora passa a uno, se non lo è passa a 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    //toggle fa si che se l'elemento ha player active lo rimove, se non lo ha lo mette (serve per l'illuminazione..)
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function(){
  // add current score to the global score of the active player 
  scores[activePlayer] += currentScore;  //scores[1] = score[1] + currentScore
  document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
  //controllo se lo score è >= a 100
  if(scores[activePlayer]>=100)
    {
      document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
      document.querySelector(`.player--${activePlayer}`).classList.add('player-active');
    }
  else 
  {
    //cambio player
    //metto lo score dell'active player = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0; //setto la variabile a 0
    //se l'avtive player è 0 allora passa a uno, se non lo è passa a 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    //toggle fa si che se l'elemento ha player active lo rimove, se non lo ha lo mette (serve per l'illuminazione..)
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});


