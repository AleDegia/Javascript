'use strict';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1)Create an array 'events' of the different game events that happened (no duplicati)
const set = new Set();
for(const [key, value] of gameEvents)
  {
    set.add(value);
  }
console.log(set);

//o meglio
const events = [...new Set(gameEvents.values())];
console.log(events);


//2) After the game has finished, it was found that the yellow card from min 64 was unfair.
//Remove this event
gameEvents.delete(64);

//3)Print the following string to the console: 'An event happened, on average, every 9 minutes' calcolando la media
const timeTotal = [...gameEvents.keys()]; //metto i valori delle keys in un array
const lastMin= timeTotal[timeTotal.length-1]; //prendo l'ultimo valore dell array
console.log(`An event happened, on average, every ${lastMin/gameEvents.size} minutes`);

//4) Loop thrugh the object
for (const [min, event] of gameEvents) { //itero su ogni coppia di game events
  const half = min <= 45 ? 'FIRST' : 'SECOND'; //primo o secondo tempo
  console.log(`[${half} HALF] ${min}: ${event}`); //stampo info
}