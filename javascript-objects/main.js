var student = {
  firstName: 'Owen',
  lastName: 'Adams',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Team Lead in Customer Service and Warehousing';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Volkswagen',
  model: 'Passat 2.0T LUX',
  year: 2008
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);
