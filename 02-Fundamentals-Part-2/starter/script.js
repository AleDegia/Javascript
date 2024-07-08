// //es funzioni
// dolphinScore1_1 = 44;
// dolphinScore1_2 = 23;
// dolphinScore1_3 = 71;

// koalasScore1_1 = 65;
// koalasScore1_2 = 54;
// koalasScore1_3 = 49;


// //arrow function che calcoli la media dei 3 score
// const calcAverageDolphin1 = (a, b, c) => (a + b + c)/3;

// const calcAverageKoala1 = (a, b, c) =>  //si puo scrivere anche cosi.. (a,b e c sono variabili nuove e differenti da quelle qua su..)
// {
//     const result = (a + b + c)/3;
//     return result;
// }

// //definisco la funzione per vedere qual'è la media + alta
// function checkWinner (calcAverageDolphin1, calcAverageKoala1)
// {
//     if(calcAverageDolphin1>calcAverageKoala1)
//     {
//         console.log("Dolphin wins");
//     }
//     else if(calcAverageKoala1>calcAverageDolphin1)
//     {
//         console.log("Koala wins");
//     }
// }

// const averageDolhpin = calcAverageDolphin1(dolphinScore1_1, dolphinScore1_2, dolphinScore1_3);
// const averageKoala = calcAverageKoala1(koalasScore1_1, koalasScore1_2, koalasScore1_3);

// console.log(checkWinner(averageDolhpin, averageKoala));



/*
es fatto come dio comanda:


const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner (calcAverageDolphin1, calcAverageKoala1)
{
    if(calcAverageDolphin1>calcAverageKoala1)
    {
        console.log("Dolphin wins");
    }
    else if(calcAverageKoala1>calcAverageDolphin1)
    {
        console.log("Koala wins");
    }
}

console.log(checkWinner(scoreDoplhins, scoreKoalas));

*/



//coding challenge 8 (lezione )

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];          //costo
tips = [];                                                       //mancia
totals = [];


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


for(let i = 0; i < 10; i++)
{
    const calculatedTip = calculateTip(bills[i]); //assegno valore da funzione a variabile
    tips.push(calculatedTip);
    totals.push(tips[i]+bills[i]);
    console.log(totals[i]);
}


const calcAverage = function (arr)
{    //arr è come dichiarare una variabile aprametro []arr ..
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
    // sum = sum + arr[i];
    sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


