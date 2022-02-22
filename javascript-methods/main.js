// assign numeric value to variables 3 times
var firstNum = 1337;
var secondNum = 14;
var thirdNum = 81;

// console log values
console.log('value of firstNum, secondNum, and thirdNum:', firstNum, ',', secondNum, ',', thirdNum);

// assign Math.max(first, second, third) return value to a new variable
var maximumValue = Math.max(firstNum, secondNum, thirdNum);

// console log maximumValue
console.log('value of maximumValue:', maximumValue);

// assign an array to a new variable
var heroes = ['Spoodermon', 'Captain Planet', 'Groot', 'Batman'];

// console log heroes
console.log('value of heroes', heroes);

// use Math.random and assign the value to a variable
var randomNumber = Math.random() * heroes.length;

// console log randomNumber
console.log('value of random number:', randomNumber);

// use Math.floor with randomNumber as an argument and assign the result to a variable
var randomIndex = Math.floor(randomNumber);

// console log randomIndex
console.log('value of randomIndex:', randomIndex);

// use heroes at randomIndex and assign the returned value to a new variable
var randomHero = heroes[randomIndex];

// console log randomHero
console.log('Our current favorite super hero is:', randomHero);
