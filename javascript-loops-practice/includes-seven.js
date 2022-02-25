/* exported includesSeven */
function includesSeven(array) {
  if (!Array.isArray(array)) {
    return 'Error: argument must be an array';
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
