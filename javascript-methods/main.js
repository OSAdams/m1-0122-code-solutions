var firstNum = 1337;
var secondNum = 14;
var thirdNum = 81;

console.log('value of firstNum, secondNum, and thirdNum:', firstNum, ',', secondNum, ',', thirdNum);

var maximumValue = Math.max(firstNum, secondNum, thirdNum);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Spoodermon', 'Captain Planet', 'Groot', 'Batman'];

console.log('value of heroes', heroes);

var randomNumber = Math.random() * heroes.length;

console.log('value of random number:', randomNumber);

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Our current favorite super hero is:', randomHero);

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

console.log('value of library:', library);

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

console.log('value of library:', library);

library.unshift(css);

console.log('value of library:', library);

library.splice(1, 1);

console.log('final value of library:', library);

var fullName = 'Owen Adams';

console.log('value of fullName:', fullName);

var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

console.log('value of firstName:', firstName);

var sayMyName = firstName.toUpperCase();

console.log('you\'re goddamn right:', sayMyName);
