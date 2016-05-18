module.exports = function() {
  return function createChildrenObserver(sel, added, removed) {
    var el = sel();
    var mo = createMutationObserver(el, createChildObserverConfig(), childrenObserverHandler());
    el.dataset.obsChildCount = getChildCount(el);
    el = null;
    return mo;
  }
};