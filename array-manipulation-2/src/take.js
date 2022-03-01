/* exported take */
/*
  define a function with two parameters, an array and a number
  assign an empty array to a result variable
  if an empty array is passed, return result
  initialize a loop for array passed as arg
  push values ending at number (passed as argument 2) - 1
  return result
*/
function take(array, count) {
  // check if arguments passed are valid, first must be array, second must be number
  if (!Array.isArray(array) || !typeof count === 'number') {
    // return error with descriptive message
    return 'Error: Invalid arugments passed. First argument must be an array, second argument must be a number';
  }
  // if conditional checking the length of the array
  // --PLEASE NOTE, EXPRESSION array === [] DID NOT WORK--
  if (array.length === 0) {
    // return empty array if array.length === 0
    return [];
  }
  // assign empty array to var
  const result = [];
  // initialize a for loop to loop through array to before count index
  for (let i = 0; i < count; i++) {
    // push arg1 values to result
    result.push(array[i]);
  }
  // return result
  return result;
}
