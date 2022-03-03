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
  // initialize for loop to loop through array
  for (let i = 0; i < keys.length; i++) {
    // initialize for... in loop to loop through object
    for (const k in source) {
      // if the value at keys[i] are absolutely equal to k
      // and source[k] is not equal to undefined
      if (keys[i] === k && source[k] !== undefined) {
        // assign source[k] value to result[keys[i]]
        result[keys[i]] = source[k];
      }
    }
  }
  // return result
  return result;
}
