/* exported truncate */
/*
  define a function named truncate with two para's, length and string
  return error if first arg passed is not a number and if second
  arg passed is not a string
  declare a var and assign empty string
  declare a var and assign string of ...
  return string ... if an empty string is passed
  loop through string until we reach the length number passed as arg
  push values at index for each iteration
  concat var of string ... to new string
  return result
*/
function truncate(length, string) {
  // return error if args passed are not valid values
  if (typeof length !== 'number' || typeof string !== 'string') {
    return { error: 'Invalid arguments passed. First argument needs to be a number, second argument needs to be a string' };
  }
  // if empty string is passed, return ...
  if (string === '') {
    return '...';
  // if length > string.length, return string + ...
  } else if (length > string.length) {
    return string + '...';
  }
  // declare variable and assign empty string
  let result = '';
  // initialize for loop, loop through the string until we hit the length arg passed
  for (let i = 0; i < length; i++) {
    // concat and re-assign value to result variable
    result += string[i];
  }
  // return result concated with ...
  return result + '...';
}
