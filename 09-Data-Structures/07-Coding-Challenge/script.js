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
  

  //1)create one player array for each team (players1 and players2)
  const players1 = game.players[0];
  const players2 = game.players[1];
  //2) the first player in any player array is the goalkeeper and the others are field players. for team 1 create one variaable with the goalkeeper's name, and one array (fieldPlayers) with all remaining 10 fields players
  
  const [neuer, ...otherPlayers]= [...players1]; //destrutturo l'array players1
  console.log(neuer, otherPlayers); //'Neuer' e array
  const gkTeam1 = neuer;

  //3) crea un array 'allPlayers' contenete tutti i giocatori di entrambi i team
  const allPlayers = [...game.players[0], ...game.players[1]];
  console.log(allPlayers);


//4) During the game team 1 used 3 substite players, so create a new array ('Players1Final) containing all the original team1 players
//plus 'Thiago', 'Pippo' e 'Persic'
const players1Final = [...game.players[0], 'Thiago', 'Pippo', 'Persic'];
console.log(players1Final);


//5)Based on the game.odds object, create one variable for each odd, called ('team1', 'darw', 'team2')
const team1Win = game.odds.team1;
const team2Win = game.odds.team2;
const draw = game.odds.x;
//in maniera piu veloce potevo fare cosi:
const {odds: {team1, x: draww, team2}} = game;


//6) Write a function printGoals that receives an arbitrary number of player names and
//prints each of them on the console, along with the number of goals that were scored in total
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
};
printGoals(game.scored); //1 goals were scored (perchè non stiamo passando gli argomenti uno per uno)
printGoals(...game.scored); //4 goals were scored



//7) print witch team is more likely to win based on the odds variables
team1 < team2 && console.log('Team 1 is more likely to win');