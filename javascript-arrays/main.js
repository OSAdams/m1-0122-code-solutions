// assign array literal to variable
var colors = [
  'red',
  'white',
  'blue'
];

// console log all indexes of array literal
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

// concat all indexes of colors array and assign to new variable
var murica = 'America is ' + colors[0] + ' ' + colors[1] + ' ' + colors[2] + '.';

// console log value of new variable
console.log(murica);

// updated 2nd index of colors
colors[2] = 'green';

// concat all indexes of oclors array and assign to new variable
var mexico = 'Meixco is ' + colors[0] + ' ' + colors[1] + ' ' + colors[2] + '.';

// console log value of mexico variable
console.log(mexico);

// console log colors array
console.log('value of colors: ', colors);

// assign array literal to variable students
var students = ['Vegeta', 'Goku', 'Piccalo', 'Gohan'];
var numberOfStudents = students.length;
var lastIndex = students.length - 1;
var lastStudent = students[lastIndex];

// console log values
console.log('There are ' + numberOfStudents + ' in this class.');
console.log('The last student in the array is ' + lastStudent);
console.log('value of students: ', students);
