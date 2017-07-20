export const safeInvoke = (fn, ...params) => {
  if (typeof fn === 'function') {
    fn(...params);
  }
};
