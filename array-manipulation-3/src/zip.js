/* exported zip */
/*
  define a function with two parameters, first and second
  if arguments passed are not arrays, return error
  assign an empty array to a variable named result
  initialize a for loop for first arg
  initialize a for loop for second arg
  push [i, k] to result array
  return result
*/

function zip(first, second) {
  // return error if arguments passed arent arrays
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return { error: 'Invalid arguments passed. First and second argument must be arrays' };
  }
  // condition to check lengths, if first has greater length than second, pop last value of first
  if (first.length > second.length) { first.pop(); }
  // condition to check lengths, if second has a greater length than first, pop last value of second
  if (first.length < second.length) { second.pop(); }
  // assign an empty array to variable named result
  const result = [];
  // initialize a for in loop for first
  for (const i in first) {
    // push [first[i], second[i]] to result
    result.push([first[i], second[i]]);
  }
  // return result
  return result;
}
