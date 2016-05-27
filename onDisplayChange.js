module.exports = function() {
  const createOnDisplayChangeObserver = require('./createOnDisplayChangeObserver')();

  return function onDisplayChange(sel, fn) {
    createOnDisplayChangeObserver(sel);
    sel().addEventListener('display.change', fn, false);
  }
};