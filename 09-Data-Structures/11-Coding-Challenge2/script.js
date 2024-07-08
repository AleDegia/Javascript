'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


  //1)loop over the game.scored array and print each player name along with the 
  //goal number. es: "Goal 1, Lewandowski" (mi serve l'index)
  for(const player of game.scored.entries())
  {
    console.log(`${player[1]} scored ${player[0]+1} goals`);
  }

  //potevi anche farlo cosi:
  for(const [i, player] of game.scored.entries())
  {
    console.log(`Goal ${i+1}: ${player}`);
  }


  //2)Use a loop to calculate the average odd and log it to the console
  const { odds } = game; // Destructuring per estrarre le quote dall'oggetto game
  const averageOdd = (odds.team1 + odds.team2 + odds.x) / 3;
  console.log(averageOdd);


  //3) stampalo bene
  for (const [team, odd] of Object.entries(game.odds)) { //iterno sulle coppie chiave valore di game.odds
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; //game[team] accede al nome della squadra(non potrei con il . perche uso una var)
    console.log(`Odd of ${teamStr} ${odd}`);
  }
  
  // Odd of victory Bayern Munich: 1.33
  // Odd of draw: 3.25
  // Odd of victory Borrussia Dortmund: 6.5


  //spiegazione:

const entries = Object.entries(game.odds);
console.log(entries);

// [  
//   ['team1', 1.33],
//   ['x', 3.25],
//   ['team2', 6.5]
// ]



//Se preferisci lavorare con un array di oggetti anziché con un array di array, 
//puoi utilizzare Object.keys() in combinazione con map() per ottenere un array di oggetti:

const keys = Object.keys(person);
const entriesArray = keys.map(key => ({ key, value: person[key] }));
console.log(entriesArray);

//[  { key: 'name', value: 'John' },  { key: 'age', value: 30 },  { key: 'city', value: 'New York' }]
