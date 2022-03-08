/* exported getKeys */
/*
  define a function with one parameter
  assign an empty array to a variable
  loop through object
  push keys of object to array
  return array
*/
function getKeys(object) {
  // assign empty array to variable
  const result = [];
  // loop through object
  for (const key in object) {
    // push key to result array
    result.push(key);
  }
  // return result
  return result;
}
