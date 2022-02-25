/* exported filterOutNulls */
function filterOutNulls(values) {
  if (!Array.isArray(values)) {
    return 'Error: argument must be an array';
  }
  const resultArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      resultArr.push(values[i]);
    }
  }
  return resultArr;
}
