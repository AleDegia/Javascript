'use strict';

//PARTE 1

// const score1 = document.querySelector('#score--0');
// const score2 = document.getElementById('score--1');   //non metto il # perchè può essere solo quello con getElementById
// const diceEl = document.querySelector('.dice');
// const currentEl1 = document.getElementById('current--0');
// const currentEl2 = document.getElementById('current--1');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// //starting conditions
// score1.textContent = 0;
// score2.textContent = 0;
// diceEl.classList.add('hidden');        //aggiungo classe 'hidden' all'elemento con classe 'dice'

// let currentScore = 0;

// // Rolling dice funcionality
// btnRoll.addEventListener('click', function(){
//     //Generating a random dice roll
//     const dice = Math.trunc(Math.random()*6)+1;
//     //display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;        //parte una foto di una faccia del dado in maniera random
//     //se esce l'1 deve cambiare giocatore
//     if(dice!==1)
//     {
//         currentScore+= dice;
//         currentEl1.textContent = currentScore;
//     } else {
        
//     }
// });



//PARTE 2

// const score1 = document.querySelector('#score--0');
// const score2 = document.getElementById('score--1');   //non metto il # perchè può essere solo quello con getElementById
// const diceEl = document.querySelector('.dice');
// const currentEl1 = document.getElementById('current--0');
// const currentEl2 = document.getElementById('current--1');
// const player1El = document.querySelector('.player--0');
// const player2El = document.querySelector('.player--1');

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// //starting conditions
// score1.textContent = 0;
// score2.textContent = 0;
// diceEl.classList.add('hidden');        //aggiungo classe 'hidden' all'elemento con classe 'dice'

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

//     const switchPlayer = function(){
//         document.getElementById(`current--${activePlayer}`).textContent = 0;
//         activePlayer = activePlayer === 0 ? 1 : 0;      //se activePlayer è 0 assegno 1 altrimenti assegno 0
//         currentScore = 0;                               //resetto lo score
//         //partiamo con la classe player--active su solo un elemento, percio rimuoverò da 1 e aggiungerò all'altro (l'elemento con classe player--active tramite il css ha 'opacity: 1;' applicato)
//         player1El.classList.toggle('player--active');   //il metodo toggle aggiunge se l'elemento non ha gia quella classe senno la rimuove se la ha
//         player2El.classList.toggle('player--active');
//     };

// // Rolling dice funcionality
// btnRoll.addEventListener('click', function(){
//     //Generating a random dice roll
//     const dice = Math.trunc(Math.random()*6)+1;
//     //display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;        //parte una foto di una faccia del dado in maniera random
//     //se esce l'1 deve cambiare giocatore
//     if(dice!==1)
//     {
//         currentScore+= dice;

//         document.getElementById(`current--${activePlayer}`).textContent = currentScore; //do lo score nel posto dello score del giocatore attuale
//     } else {
//         switchPlayer();
//     }
// });



// btnHold.addEventListener('click', function(){                               //per quando il player vuole tenere lo score e clicca su 'hold'
//     //add current score to active player's score
//     scores[activePlayer] += currentScore;                                                //localmente
//     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];     //nell'html

//     //check if he player holding reached the 100 score goal to win
//     if(scores[activePlayer] >= 20)
//     {
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');   //aggiunge sfondo nero
        
//     }
//     else{
//         switchPlayer();                                                                     //switch to the next player
//     }
// });


//PARTE 3

const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');   //non metto il # perchè può essere solo quello con getElementById
const diceEl = document.querySelector('.dice');
const currentEl1 = document.getElementById('current--0');
const currentEl2 = document.getElementById('current--1');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');        //aggiungo classe 'hidden' all'elemento con classe 'dice'

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

    const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;      //se activePlayer è 0 assegno 1 altrimenti assegno 0
        currentScore = 0;                               //resetto lo score
        //partiamo con la classe player--active su solo un elemento, percio rimuoverò da 1 e aggiungerò all'altro (l'elemento con classe player--active tramite il css ha 'opacity: 1;' applicato)
        player1El.classList.toggle('player--active');   //il metodo toggle aggiunge se l'elemento non ha gia quella classe senno la rimuove se la ha
        player2El.classList.toggle('player--active');
    };

// Rolling dice funcionality
btnRoll.addEventListener('click', function(){
    if(playing){
    //Generating a random dice roll
    const dice = Math.trunc(Math.random()*6)+1;
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;        //parte una foto di una faccia del dado in maniera random
    //se esce l'1 deve cambiare giocatore
    if(dice!==1)
    {
        currentScore+= dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore; //do lo score nel posto dello score del giocatore attuale
    } else {
        switchPlayer();
    }
  }
});



btnHold.addEventListener('click', function(){                               //per quando il player vuole tenere lo score e clicca su 'hold'
    if(playing){
    //add current score to active player's score
    scores[activePlayer] += currentScore;                                                //localmente
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];     //nell'html

    //check if he player holding reached the 100 score goal to win
    if(scores[activePlayer] >= 20)
    {
         playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');   //aggiunge sfondo nero
        
    }
    else{
        switchPlayer();                                                                     //switch to the next player
    }
  }
});

btnNew.addEventListener('click', function(){
    scores = [0,0];         //resetto l'array con gli score
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    activePlayer = activePlayer === 1 ? 0 : 0;  //faccio riapartire dal player 0 (quello a sinistra)

    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');   //rimuove sfondo nero dal winner
    playing = true;
});


