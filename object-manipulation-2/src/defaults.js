/* exported defaults */
function defaults(target, source) {
  if ((typeof target !== 'object' && Array.isArray(target)) || (typeof source !== 'object' && Array.isArray(source))) {
    return { error: 'Invalid arguments passed. First and second argument must be an object' };
  }
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
