module.exports = function() {
  return function getStateByEvent(sel, fn) {
    sel().dispatchEvent(createStateEvent(function(ev, state) { fn(state); }));
  }
};