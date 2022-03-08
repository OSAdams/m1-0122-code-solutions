/* exported equal */
function equal(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return { error: 'Invalid arguments passed. First and second argument must be an array' };
  }
  let result = true;
  for (const i in first) {
    if (first[i] !== second[i]) {
      result = false;
    }
  }
  return first.length !== second.length ? false : result;
}
