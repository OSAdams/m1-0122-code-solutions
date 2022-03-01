/* exported dropRight */
function dropRight(array, count) {
  const result = [];
  let i = 0;
  while (i < array.length - count) {
    result.push(array[i]);
    i++;
  }
  return result;
}
