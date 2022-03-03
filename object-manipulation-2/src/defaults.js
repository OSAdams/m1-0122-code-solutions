/* exported defaults */
function defaults(target, source) {
  if ((typeof target !== 'object' && Array.isArray(target)) || (typeof source !== 'object' && Array.isArray(source))) {
    return { error: 'Invalid arguments passed. First and second argument must be an object' };
  }
  for (const k in source) {
    if (!(k in target)) {
      target[k] = source[k];
    }
  }
}
