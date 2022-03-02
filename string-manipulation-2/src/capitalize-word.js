/* exported capitalizeWord */
/*
  define a function named capitalizeWord with one parameter, word
  use toLowerCase() method on parameter and assign to variable
  use split method on vairable
  use toUpperCase at index 0 of variable
  return join method on variable
*/
function capitalizeWord(word) {
  // return error if argument passed is not a string
  if (typeof word !== 'string') {
    return { error: 'Invalid argument passed. Argument must be a string' };
  }
  // return JavaScript if string passed is any form of string JaVaScRipt
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  // return argument.charAt(0).toUpperCase() concatenated with
  // argument.slice(1).toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
