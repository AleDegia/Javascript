'use strict';

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]

GOOD LUCK 😀
*/



const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
let humanAges = [];

const calcAverageHumanAge= function(ages){
  humanAges = ages.map(age=> age<=2 ? 2*age : 16+age*4)   //per ogni elemento faccio cio e ritorno nuovo array
    .filter(age => age>=18);                              //filtro il nuovo array
    console.log(humanAges);     //[36, 32, 76, 48, 28]
  const humanAge = humanAges.reduce((acc, age)=>acc+age, 0)/humanAges.length;
  return humanAge;
}
console.log(calcAverageHumanAge(dogsJulia)); //44     (36+32+76+48+28)/5


//Come l ha fatto lui (è uguale solo che la lunghezza array la prende dal parametro)
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/