/* exported invert */
function invert(source) {
  if (typeof source !== 'object' || Array.isArray(source)) {
    return { error: 'Invalid argument passed. Argument must be an object' };
  }
  const result = {};
  for (const key in source) {
    result[source[key]] = key;
  }
  return result;
}
