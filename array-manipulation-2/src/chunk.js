/* exported chunk */
function chunk(array, size) {
  if (!Array.isArray(array) || typeof size !== 'number') {
    return { error: 'Invalid arguments passed. First argument must be an array, second argument must be a number' };
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
