module.exports = function() {
  return function createStateEvent(fn) {
    return new CustomEvent('state', {'detail': {
      'handler': fn
    }});
  }
};