/* exported getStudentNames */
function getStudentNames(students) {
  if (!Array.isArray(students)) {
    return 'Error: argument must be an array';
  }
  const resultArr = [];
  for (let i = 0; i < students.length; i++) {
    if (typeof students[i] !== 'object') {
      return 'Error: array values must be objects';
    }
    resultArr.push(students[i].name);
  }
  return resultArr;
}
