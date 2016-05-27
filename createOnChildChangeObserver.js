module.exports = function() {
  const createChildrenObserver = require('./createChildrenObserver')();

  return function createOnChildChangeObserver(sel, addFn, removedFn) {
    createChildrenObserver(
      sel, 
      (added) => { console.log('added', added); },
      (removed) => { console.log('removed', removed); }
    );
  }
};