/* exported capitalizeWords */
/*
  define function with one parameter, string value
  return error if argument passed is not string value
  use toLowerCase().split('') methods on argument passed and assign to variable
  initialize a for loop
  loop through array using toUpperCase() method on array[index][0]
  return array.join(' ')
*/
function capitalizeWords(string) {
  // return error if argument is not a string
  if (typeof string !== 'string') {
    return { error: 'Invalid argument passed. Argument must be a string' };
  }
  // assign argument.toLowerCase().split(' ') to variable
  const lwrArray = string.toLowerCase().split(' ');
  // assign empty array to variable
  const result = [];
  // loop through lwrArray
  for (let i = 0; i < lwrArray.length; i++) {
    // push capitalized word to array
    result.push(lwrArray[i].charAt(0).toUpperCase() + lwrArray[i].slice(1).toLowerCase());
  }
  // return join method of the result object with one argument, an empty string
  return result.join(' ');
}
