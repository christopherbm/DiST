module.exports = function() {
  const createChildrenObserver = require('./createChildrenObserver')();

  return function createOnChildChangeObserver(sel, addedFn, removedFn) {
    createChildrenObserver(
      sel, 
      (added) => { addedFn(added); },
      (removed) => { removedFn(removed); }
    );
  }
};