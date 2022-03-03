/* exported omit */
/*
  define a function with two parameters, source (object) keys (array)
  if source is not an object, and keys is not an array - return error
  if empty object is passed as an argument, return empty object
  assign object literal to variable result
  initialize for loop to loop through array
  initialize for... in loop to loop through object
  if !source[key] === keys[i]
  assign result.keys[i] = source[key]
  return object
*/
function omit(source, keys) {
  // if arguments passed are invalid arguments
  if ((typeof source !== 'object' && Array.isArray(source)) || !Array.isArray(keys)) {
    // return error
    return { error: 'Invalid arguments passed. First argument must be an object, second argument must be an array' };
  }
  // assign object literal to result
  const result = {};
  // initialize a for... in loop
  for (const k in source) {
    // if keys does not include the value of k
    if (!keys.includes(k)) {
      // assign result at k the value of source[k]
      result[k] = source[k];
    }
  }
  // return result
  return result;
}
