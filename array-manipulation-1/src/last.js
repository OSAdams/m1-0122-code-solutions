/* exported last */
function last(array) {
  // return undefined for an empty array
  if (array === []) {
    return undefined;
  }
  // return last index value of array
  return array[array.length - 1];
}
