'use strict';

// //seleziono i singoli elementi
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');

// //seleziono tutti gli elementi di classe 'show modal' e li metto in btnsOpenModal che sarà tipo un array: [button.show-modal, button.show-modal, button.show-modal]
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// //stampo
// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);




  /*parte 2*/

  //seleziono i singoli elementi
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


//seleziono tutti gli elementi di classe 'show modal' e li metto in btnsOpenModal che sarà tipo un array: [button.show-modal, button.show-modal, button.show-modal]

const btnsOpenModal = document.querySelectorAll('.show-modal');

//assegno ad ogni bottone un event handler che rimuove la classe hidden dall'elemento modal e dall'elemento overlay
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function(){
     modal.classList.remove('hidden');                       //non .hidden perchè non è un selettore, ma diciamo solo la classe da rim
     overlay.classList.remove('hidden');                     //quando clicclo su uno di questi 2 bottoni rimuovo la classe 'hidden'
});

//funzione per chiudere il modal
const closeModal = function(){
   modal.classList.add('hidden');                           //riaggiungo classe hidden all'elemento con classe 'modal'
   overlay.classList.add('hidden');                     //se non lo riaggiungo si leva il modal ma rimane tutto opaco
};

//funzione per chiudere modal aggiungendo 'hidden' anche se clicco fuori dal modal (sullo sfondo opaco..)
// closeModal = function(){
//    modal.classList.add('hidden');                           //riaggiungo classe hidden all'elemento con classe 'modal'
//    overlay.classList.add('hidden');
// };

btnCloseModal.addEventListener('click', closeModal);      //aggiungo eventListener al modal cosi reagisce se ci clicco sopra
overlay.addEventListener('click', closeModal);