/* exported lastChars */
function lastChars(length, string) {
  if (!parseInt(length) || typeof string !== 'string') {
    return { error: 'Invalid arguments passed. First argument must be a number, second argument must be a string' };
  }
  return string.slice(-1 * length);
}
