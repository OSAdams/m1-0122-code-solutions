/* exported filterOutStrings */
function filterOutStrings(values) {
  if (!Array.isArray(values)) {
    return 'Error: argument must be an array';
  }
  const resultArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      resultArr.push(values[i]);
    }
  }
  return resultArr;
}
