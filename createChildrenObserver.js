module.exports = function() {
  const createMutationObserver = require('./createMutationObserver')();
  const createChildObserverConfig = require('./createConfigs/createChildObserverConfig')();
  const childrenObserverHandler = require('./childrenObserverHandler')();

  return function createChildrenObserver(sel, added, removed) {
    var el = sel();
    var mo = createMutationObserver(el, createChildObserverConfig(), childrenObserverHandler(added, removed));
    el.dataset.obsChildCount = getChildCount(el);
    el = null;
    return mo;
  }
};