/* exported flatten */
/*
  define a function with one paremeter, array
  if argument passed is not an array, return error
  assign an empty array to a variable named result
  initialize a for.. in loop
  push array values into result
  return result
*/

function flatten(array) {
  // if argument passed is not an array, return error
  if (!Array.isArray(array)) {
    return { error: 'Invalid argument passed. First argumen tmust be an array' };
  }
  // assign an empty array to a const variable named result
  const result = [];
  // initialize a for... in loop
  for (const i in array) {
    // check if array[i] is an array
    if (Array.isArray(array[i])) {
      // if true, loop through array at array[i]
      for (const k in array[i]) {
        // push value in array[i][k] to result
        result.push(array[i][k]);
      }
    } else {
      // push array[i] to result
      result.push(array[i]);
    }
  }
  // return result
  return result;
}
