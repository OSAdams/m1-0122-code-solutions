/* exported toObject */
function toObject(keyValuePair) {
  const result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
  /*
    Another way, destructuring
    var [key, value] = keyValuePair;
    var object = {};
    object[key] = value;
    return object;
  */
}
