/* exported isPalindromic */
/*
  deine a function with one parameter, string
  assign obj literal to variable
  assign an empty string to a variable
  initialize a for loop to loop through string in reverse
  concat and re-assign value to variable
  return ternary operator
*/

function isPalindromic(string) {
  // assign object literal with error to const variable err
  const err = { error: 'Invalid argument passed. Argument must be a string' };
  // call the join method of the split method of the string string and assign to variable
  const holder = string.split(' ').join('');
  // call the join method of the reverse method of the split method of the holder string
  const compare = holder.split('').reverse().join('');
  /*
    return ternary operator - if arg is not a string, return error
    else use expression to return boolean value
  */
  // eslint-disable-next-line no-constant-condition
  return (!typeof string === 'string') ? err : compare === holder;
}
