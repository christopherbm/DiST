module.exports = function() {
  const createOnChildChangeObserver = require('./createOnChildChangeObserver')();

  return function onChildChange(sel, addedFn, removedFn) {
    createOnChildChangeObserver(sel);
    //sel().addEventListener('child.change', fn, false);
  }
};