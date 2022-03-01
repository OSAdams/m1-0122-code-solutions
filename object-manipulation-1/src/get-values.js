/* exported getValues */
/*
  define a functino with one
  assign an empty array to result
  push key values into array
  return array
*/
function getValues(object) {
  // assing empty array to variab
  const result = [];
  // loop through object
  for (let i in object) {
    // push values of keys to result array
    result.push(object[i])
  }
  // return result array
  return result;
}
