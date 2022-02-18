function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

// comment to remove

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Beavis');

console.log('greetResult:', greetResult);

// create function that takes two arguments, width and height
function getArea(w, h) {
  return w * h;
}

// call the function with two numerical arguments and assign
// the return to a variable
var getAreaResult = getArea(17, 42);

// console log a string and the variable getAreaResult
console.log('getAreaResult:', getAreaResult);

// create a function that takes an object as an argument,
// function returns the value of property 'firstName'
function getFirstName(person) {
  return person.firstName;
}

// call the function with the object argument and assign
// the return to a variable
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

// console log a string and the variable getFirstNameResult
console.log('getFirstNameResult:', getFirstNameResult);

// define a function that takes an array as an argument
// and returns the last index of the array
function getLastElement(array) {
  return array[array.length - 1];
}

// call the function with an array argument and assign
// the return to a variable
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

// console log a string and the variable getLastElementResult
console.log('getLastElementResult:', getLastElementResult);
