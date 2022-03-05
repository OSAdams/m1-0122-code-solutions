/* exported intersection */
function intersection(first, second) {
  const err = { error: 'Invalid arguments passed. First and second arguments must be arrays' };
  const result = [];
  for (const i in first) {
    if ([...second].includes(first[i])) {
      result.push(first[i]);
    }
  }
  return (!Array.isArray(first) || !Array.isArray(second)) ? err : result;
}
