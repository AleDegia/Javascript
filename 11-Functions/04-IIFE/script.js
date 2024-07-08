'use strict';

//Immediately Invoked Function Expressions(IIFE)
//An IIFE is a function that is defined and executed immediately after it is created.
//Sono funzioni che vogliamo eseguire uan volta e poi mai piu

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE                                               (The function itself is written as an expression rather than a declaration.)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;   //perchè dentro lo scope
})(); //invocazione

// console.log(isPrivate);

//con le arrow functions:
(() => console.log('This will ALSO never run again'))();


{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);