'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
console.log(age);  //questo non si puo
printAge();        //questo nemmeno