/* exported reverse */
function reverse(array) {
  const result = [];
  if (array === []) {
    return result;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
