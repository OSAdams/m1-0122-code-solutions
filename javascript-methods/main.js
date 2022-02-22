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

// Array Methods

// assign 3 object literals in an array to a variable
var library = [
  {
    title: 'Astrophysics for People in a Hurry',
    author: 'Neil deGrasse Tyson'
  },
  {
    title: 'Golf is Not a Game of Perfect',
    author: 'Dr. Bob Rotella with Bob Cullen'
  },
  {
    title: 'JavaScript for impatient programmers',
    author: 'Dr. Axel Rauschmayer'
  }
];

// console log ibrary
console.log('value of library:', library);

// use pop method on library and assign value to lastBook
var lastBook = library.pop();

// console log lastBook
console.log('value of lastBook:', lastBook);

// call shift method on library and assign value to firstBook
var firstBook = library.shift();

// console log firstBook
console.log('value of firstBook:', firstBook);

// create two new bbook objects and assign value to two seperate variables
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

// call push method of the library object with the variable js as argument
library.push(js);

// console log library
console.log('value of library:', library);

// call unshift method of library object and pass css as argument
library.unshift(css);

// console log library
console.log('value of library:', library);

// call splice method of the library object with 1, 1 as arguments
// removing the library[1] value
library.splice(1, 1);

// console log library
console.log('final value of library:', library);
