console.log('hello, world');

// query the dom for the h1 element and console.log + console.dir its value
const $h1 = document.querySelector('h1');
console.log('value of $h1:', $h1);
console.dir($h1);

/*
  query the dom with the id selector explanation and console.log + console.dir
  its value
*/
const $explanation = document.querySelector('#explanation');
console.log('value of $explanation:', $explanation);
console.dir($explanation);

/*
  query the dom with the css selector hint and console.log + consol.dir
  its value
*/
const $hint = document.querySelector('.hint');
console.log('value of $hint:', $hint);
console.dir($hint);

// query the dom for all p elements and console.log the value
const $allPElements = document.querySelectorAll('p');
console.log('p element node list:', $allPElements);

/*
  query the dom for all elements with a class value of example-link and console.log
  its values
*/
const $classExampleLink = document.querySelectorAll('.example-link');
console.log('Class example-link element node list:', $classExampleLink);

// comment to remove
