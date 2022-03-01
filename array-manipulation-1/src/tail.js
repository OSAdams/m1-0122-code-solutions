/* exported tail */
function tail(array) {
  // assign an empty array to a variable
  const result = [];
  // return empty array if argument is an empty array
  if (array === []) {
    return result;
  }
  // initialize a for loop, iterate through the array starting at 2nd index
  for (let i = 1; i < array.length; i++) {
    // push index values into result array
    result.push(array[i]);
  }
  // return result array of all index values other than the first of the argument passed
  return result;
}
