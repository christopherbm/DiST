module.exports = function() {
  return function createStateEventHandler(state) {
    return function(e) { e.detail.handler(e, state); }
  }
};