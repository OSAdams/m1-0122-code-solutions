/* exported includes */
function includes(array, value) {
  if (!Array.isArray(array) || value === undefined) {
    return { error: 'Invalid arguments passed. First argument must be an array, second argument must be a value' };
  }
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
