/* exported initial */

/*
  define a function
  assign empty array to variable
  return empty array if argument passed is an empty array\
  initialize a for loop that will iterate all indexes but the last in argument passed
  in the loop, push all values (besides the last) in the array argument passed to empty array
  return said array
*/
function initial(array) {
  // assign empty array to variable
  const result = [];
  // if array is empty, return result
  if (array === []) {
    return result;
  }
  // initialize a for loop that will not iterate to the last index value
  for (let i = 0; i < array.length - 1; i++) {
    // push index values into result array
    result.push(array[i]);
  }
  // return result array
  return result;
}
