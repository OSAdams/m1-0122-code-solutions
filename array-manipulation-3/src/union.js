/* exported union */
/*
  define a function with two para's, first and second
  assign an object literal with error message to variable
  assign a variable named holder with the value of first
  use push method of holder object with one arg, ...second
  use Set constructor and assign value to result
  ^^ const result = new Set(holder);
  return ternary operator with expression to check arg values
  to return result or error
*/

function union(first, second) {
  const err = { error: 'Invalid arguments passed. First and second arguments must be arrays' };
  const result = [...first];
  for (const i in second) {
    if (!result.includes(second[i])) {
      result.push(second[i]);
    }
  }
  return (!Array.isArray(first) || !Array.isArray(second)) ? err : result;
}
