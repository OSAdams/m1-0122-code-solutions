/* exported takeRight */
/*
  define a function with two parameters
  return error if argument values are invalid
  use expression to return empty array if an empty array is passed as arg
  assign expression array.length - (1 + count) to var
  return array.slice(var)
*/
function takeRight(array, count) {
  // use expression to see if arguments are valid values
  if (!Array.isArray(array) || !typeof count === 'number') {
    // return error with descriptive message
    return 'Error: Invalid arugments passed. First argument must be an array, second argument must be a number';
  }
  // use expression to check if array.length < count
  if (array.length < count) {
    // return array
    return array;
  }
  // return array.slice(array.length - count);
  // UPDATE -- using negative intergers requires less resources (easier expression to use)
  return array.slice(count * -1);
}
