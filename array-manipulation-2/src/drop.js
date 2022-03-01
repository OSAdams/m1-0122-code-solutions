/* exported drop */
/*
  define a function with two para, array and count
  check passed arguments, if they do not match an array and number --
  -- return error
  check length of array
  if not > 0, return empty array
  assign empty array to result var
  initialize loop
  WIP
*/
function drop(array, count) {
  // use expression to check arguments passed
  if (!Array.isArray(array) || typeof count !== 'number') {
    // return error if incorrect values are passed
    return { error: 'Invalid arugments passed. First argument must be an array, second argument must be a number' };
  }
  // return array.slice(count)
  return array.slice(count);
}

// ..... if only we could remember all methods LOL
