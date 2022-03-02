/* exported ransomCase */
/*
  define a function with one parameter, string value
  return error if argument passed is not string value
  assign an empty string to result variable
  loop through string using for loop
  if index is even, lower case letter and concat to result
  if index is odd, upper case letter and concat to result
  return result
*/
function ransomCase(string) {
  // return error if argument passed is not a string
  if (typeof string !== 'string') {
    return { error: 'Invalid argument pased. Argument must be a string' };
  }
  // assign empty string to result variable
  let result = '';
  // initialize for loop, loop through string
  for (let i = 0; i < string.length; i++) {
    // concat even index values.toLowerCase() to result
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    // concat odd index values.toUpperCase() to result
    } else {
      result += string[i].toUpperCase();
    }
  }
  // return result
  return result;
}
