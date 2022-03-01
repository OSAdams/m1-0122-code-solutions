/* exported dropRight */
function dropRight(array, count) {
  if (!Array.isArray(array) || typeof count !== 'number') {
    return { error: 'Invalid arguments passed. First argument must be an array, second argument must be a number' };
  }
  const result = [];
  let i = 0;
  while (i < array.length - count) {
    result.push(array[i]);
    i++;
  }
  return result;
}
