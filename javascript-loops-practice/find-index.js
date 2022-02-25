/* exported findIndex */
function findIndex(array, value) {
  if (!Array.isArray(array)) {
    return 'Error: first argument must be an array';
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
