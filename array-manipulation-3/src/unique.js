/* exported unique */
/*
  define a function with one para, array
  if argument passed is not an array, return error
  assign an empty array to a variable result
  declare a let variable
  intitialize a for.. in loop
  assign the let variable to the value of array[i]
  use an expression to determine if we are pushing the value to result array
  return result
  i dont know what im doing
 */

function unique(array) {
  // assign object literal to err variable
  const err = { error: 'Invalid argument passed. Argument must be an array' };
  /*
    trial an error, there is a much more complex filter method
    im going to try something else
    return [...new Set(array)]; <-- this works v sleak
  */
  // assign empty array to variable named result
  const result = [];
  // initialize a for... in loop for array
  for (const i in array) {
    // expression to check if result includes value in array[i]
    // if not, push value into result array
    if (!result.includes(array[i])) { result.push(array[i]); }
  }
  /*
    expression to check if the argument passed is an array
    if it isn't an array, return err variable value
    if it is an array, return result
  */
  return Array.isArray(array) ? result : err;
}

// return [...new Set(array)] is quite possibly the laziest, most beautiful thing i've seen
