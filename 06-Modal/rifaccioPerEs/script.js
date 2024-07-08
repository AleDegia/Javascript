'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');         //seleziono i 3 bottoni
console.log(btnsOpenModal);

for(let i = 0; i<btnsOpenModal.length; i++)         //aggiungo ad ognuno dei 3 bottoni un event listener
  {
   btnsOpenModal[i].addEventListener('click', function(){
    console.log('button clicked');
    modal.classList.remove('hidden');     //rimuovo classe 'hidden' dai modal (cioe dai pop-up) cosi da poterli vedere
    overlay.classList.remove('hidden')    //rimuovo l'hidden dall'overlay cosi fa la sfuocatura
   })
  }

  //per quando clicco sulla x
  btnCloseModal.addEventListener('click', function()
    {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  );

  //funzione per chiudere il pop up, sia che clicco sullo sfondo che sulla x
  const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 };
 
 //non uso le () per le funzioni perchè non devo chiamarle subito ma aspettare che si verifichi l'evento
 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);

//evento per quando premiamo qualsiasi tasto della tastiera e parametro 'e' per storare l'evento e vederne le info
 document.addEventListener('keydown', function(e){
  console.log(e);		//grazie a cio vedremo il tipo di evento (keybordEvent) e la key cliccata
  console.log(e.key); 		//ora vedremo solo il tipo di tasto cliccato

  //facciamo in modo che premendo Esc, se l'elemento di classe 'modal' non contiene la class 'hidden' (percio se il pop up è aperto) venga chiuso
  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden'))
    {
      closeModal();
    }
  }
 });
  