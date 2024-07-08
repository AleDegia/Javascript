'use strict';

let numberToGuess = Math.floor(Math.random() * 19)+1;  //numero casuale da 1 a 20
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener("click", function(){

    let valoreInserito = Number(document.querySelector('.guess').value);
    if(valoreInserito === numberToGuess)
    {
        document.querySelector('.message').textContent = 'Hai vinto!';
        document.body.style.backgroundColor = "yellow";
        if(highScore<score)
        {
            highScore = score;
            document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highScore}`;
        }
    }
    else if(valoreInserito > numberToGuess)
    {
        document.querySelector('.message').textContent = "Troppo alto!";
        score--;
        document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
    }
    else if(valoreInserito < numberToGuess)
    {
        document.querySelector('.message').textContent = "Troppo basso!";
        score--;
        document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
    }
});


document.querySelector('.again').addEventListener("click", function(){
    numberToGuess = Math.floor(Math.random() * 19)+1;  //numero casuale da 1 a 20
    // document.querySelector('.guess').textContent='';
    document.querySelector('.guess').value='';   //si fa col .value con gli input anche a livello visivo, non textContent
    document.querySelector('.message').textContent = 'Start Guessing...'
    document.body.style.backgroundColor = '#333';
});