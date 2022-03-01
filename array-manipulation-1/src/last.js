/* exported last */
/*
  define a function with 1 parameter
  return undefined for an empty array passed as argument
  return last index value of array passed as argument
*/
function last(array) {
  // return undefined for an empty array
  if (array === []) {
    return undefined;
  }
  // return last index value of array
  return array[array.length - 1];
}
