var colors = [
  'red',
  'white',
  'blue'
];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

var murica = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log(murica);

colors[2] = 'green';
var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log(mexico);
console.log('value of colors: ', colors);

var students = ['Vegeta', 'Goku', 'Piccalo', 'Gohan'];
var numberOfStudents = students.length;
var lastIndex = students.length - 1;
var lastStudent = students[lastIndex];

console.log('There are ' + numberOfStudents + ' students in this class.');
console.log('The last student in the array is ' + lastStudent);
console.log('value of students: ', students);
