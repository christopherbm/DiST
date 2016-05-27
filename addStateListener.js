module.exports = function() {
  const createStateEventHandler = require('./createStateEventHandler')();

  return function addStateListener(sel, state) {
    sel().addEventListener('state', createStateEventHandler(state), false);
  }
};