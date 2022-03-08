/* exported pick */
/*
  define a function with two parameters, source and keys
  return error if arguments passed arenot valid values object and array
  assign object literal to variable result
  loop through through array
  in for loop use while loop to loop through object
  if array value matches object key, set object key value to object literal result
  return object
*/
function pick(source, keys) {
  // return error if arguments passed are invalid values
  if (typeof source !== 'object' || !Array.isArray(keys)) {
    return { error: 'Invalid arguments passed. First argument must be an object, second argument must be an array' };
  }
  // assign object literal to variable
  const result = {};
  // initialize a for in loop
  for (const key in source) {
    // check if keys includes the value of k, and if source[k] is not undefined
    if (typeof source[key] !== 'undefined') {
      // assign result[k] the value of source[k]
      result[key] = source[key];
    }
  }
  // return result
  return result;
}
