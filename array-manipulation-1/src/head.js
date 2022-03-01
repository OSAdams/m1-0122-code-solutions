/* exported head */
/*
  define a function with 1 parameter
  return undefined if argument passed is an empty array
  return first index of argument passed
*/
function head(array) {
  // return undefined if argument passed is an emtpy array
  if (array === []) {
    return undefined;
  }
  // return first index of array passed as an argument
  return array[0];
}
