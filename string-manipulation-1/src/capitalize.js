/* exported capitalize */
/*
  define a function with one parameter
  lowercase all letters in string and assign to variable
  assign empty string to variable
  initialize for loop concatening and reassign value to empty string variable
  uppercase first index
  return result
*/
function capitalize(word) {
  // assign argument passed to lower case to a variable
  const wordLC = word.toLowerCase();
  // assign first index of argument passed to uppercase to result
  let result = word[0].toUpperCase();
  // initialize a loop starting at first index of argument passed
  for (let i = 1; i < word.length; i++) {
    // concat and reassign value to result with indexes of argument passed
    result += wordLC[i];
  }
  // return result
  return result;
}

// I was able to write less code here than I initially thought, whoop whoop
// also i'm exicted to see how different (hopefully) my code is from the first time around
// i don't look until after it gets approved
