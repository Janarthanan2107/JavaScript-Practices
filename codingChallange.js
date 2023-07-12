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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
let players1 = game.players[0]
let players2 = game.players[1]
console.log(players1[0])
console.log(players2[0])

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// let team1 = game.players[0]
// const [gk, ...fieldPlayers] = team1
// console.log(`goalkeeper is:${gk}`)
// console.log(`fieldPlayer is:${fieldPlayers}`)

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// let team1 = game.players[0]
// let team2 = game.players[1]
// let allPlayers = []
// allPlayers.push(team1 + team2)
// console.log(allPlayers)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

let addPlayers = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic']
console.log(addPlayers)

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
let scores = game.odds
console.log(scores)

const team1 = game.odds.team1
const draw = game.odds.x
const team2 = game.odds.team2

console.log(team1)
console.log(draw)
console.log(team2)

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal Number ${Number(i) + 1}:${game.scored[i]}`)
}

function printGoals(scored) {
    for (let i = 0; i < scored.length; i++) {
        console.log(Number(i) + 1)
        console.log(scored[i])
        console.log(`Goal Number ${Number(i) + 1}:${scored[i]}`)
    }
}

printGoals(game.scored)

// console.log(game.scored[0])
// console.log(game.scored[1])
// console.log(game.scored[2])
// console.log(game.scored[3])

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

