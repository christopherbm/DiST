module.exports = function() {
  const createOnChildChangeObserver = require('./createOnChildChangeObserver')();

  // make sure this is clean that it only works on direct children (not recursive)
  return function onChildChange(sel, addedFn, removedFn) {
    var args = Array.prototype.slice.call(arguments);
    if (args.length === 1) {
      createOnChildChangeObserver(sel, addedFn, removedFn);
    }
    //sel().addEventListener('child.change', fn, false);
  }
};