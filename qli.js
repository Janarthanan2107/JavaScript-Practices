'use strict';

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// let population = 31
// let country = "India"

// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${33 - population} million
//     below average`,
//     );
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }

// const numNeighbors = prompt(
//     'How many neighbor countries does your country have?',
// );
// LATER : This helps us prevent bugs
// const numNeighbors = Number(prompt('How many neighbor countries does your country have ? '));
// if (numNeighbors === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// let language = "english";
// let population = 30;
// let isIsland ;
// let country = "India"

// if (language === 'english' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }


// // // the same time a score of at least 100 points.

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy!');
// } else {
//     console.log('No one wins the trophy 😭');
// }

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// Call this function 3 times, with input data for 3 different countries.

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and
//     its capital city is ${capitalCity}`;
// }
// const descPortugal = describeCountry('Portugal', 10,
//     'Lisbon');
// const descGermany = describeCountry('Germany', 83,
//     'Berlin');
// const descFinland = describeCountry('Finland', 6,
//     'Helsinki');
// console.log(descPortugal, descGermany, descFinland);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// };

// const percPortugal1 = percentageOfWorld1(10);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);
// console.log(percPortugal1, percChina1, percUSA1);

// const percentageOfWorld3 = population => (population / 7900)
//     * 100;
// const percPortugal3 = percentageOfWorld3(10);
// const percChina3 = percentageOfWorld3(1441);
// const percUSA3 = percentageOfWorld3(332);
// console.log(percPortugal3, percChina3, percUSA3);

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million
//     people, which is about ${percentage}% of the world.`;
//     console.log(description);
// };
// describePopulation('Portugal', 10);
// describePopulation('China', 1441);