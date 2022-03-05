/* exported difference */
/*
  define a function with two arguments, first and second
  assign an object containing a key-pair value error to reference the arguments passed
  assign a variable named holder with the value of the first argument passed
  holder.push(...second) to have all values from both arguments in one array
  declare a variable named result and assign an empty array
  initialize a for... in loop to loop through holder
  use expression to find if result.includes holder[i]
  use expression to check if args passed are arrays, if true return result, if not return error
  going through this, this will probably work for union
  */

function difference(first, second) {
  // error to return if arguments passed are invalid
  const err = { error: 'Invalid arguments passed. First and second argument must be arrays' };
  // empty array being assign to variable result
  const result = [];
  // for...in loop for first
  for (const i in first) {
    // expression to change if the spread of second includes the value of first[i]
    if (!second.includes(first[i])) {
      // if it doesn't, push the value into result
      result.push(first[i]);
    }
  }
  // for...in loop for second
  for (const k in second) {
    // if the spread of first doesnt include the value of second[k]
    if (!first.includes(second[k])) {
      // push the value into result
      result.push(second[k]);
    }
  }
  // return result of ternary operator
  return (!Array.isArray(first) || !Array.isArray(second)) ? err : result;
}

// update comments after finished
