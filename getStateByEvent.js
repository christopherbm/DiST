module.exports = function() {
  const createStateEvent = require('./createStateEvent')();

  return function getStateByEvent(sel, fn) {
    sel().dispatchEvent(createStateEvent(function(ev, state) { fn(state); }));
  }
};