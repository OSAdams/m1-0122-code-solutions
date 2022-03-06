/* exported isAnagram */
/*
  define a function with two parameters, firstString and secondString
  assign an object literal with error message to a const variable
  assign firstString.split(' ').join('').split('') to a const var
  assign secondString.split(' ').join('') to a const var
  ~~~~~~~~~~~~~~~~~~~~~~~
  assign true value to a let variable
  initialize a for... in loop for second
  use ternary operator with expression (!firstArray.includes(second[i]))
  if true, update the value of let to false and break the loop
  return err if args are not strings else let var
*/

function isAnagram(firstString, secondString) {
  // assign object with error key value pair to err const variable
  const err = {
    error: 'Invalid arguments passed. First and second argument must be a string'
  };
  // assign first.split.join.split.sort.join to const variable for first arg
  const stringOne = firstString.split(' ').join('').split('').sort().join('');
  // assign first.split.join.split.sort.join to const variable for second arg
  const stringTwo = secondString.split(' ').join('').split('').sort().join('');
  /*
    return ternary opertator
    expression checking if args are strings - if not return err
    else return comparision expression stringOne === stringTwo
  */
  return (typeof firstString !== 'string' || typeof secondString !== 'string') ? err : stringOne === stringTwo;
}
