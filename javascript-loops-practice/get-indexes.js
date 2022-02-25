/* exported getIndexes */
function getIndexes(array) {
  if (!Array.isArray(array)) {
    return 'Error: argument must be an array';
  }
  const resultArr = [];
  for (let i = 0; i < array.length; i++) {
    resultArr.push(i);
  }
  return resultArr;
}
