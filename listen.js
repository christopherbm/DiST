module.exports = function() {
  return function listen(el, eventName, fn) {
    el.addEventListener(eventName, fn);
  }
};