module.exports = function() {
  const createMutationObserver = require('./createMutationObserver')();
  const createAttrObserverConfig = require('./createConfigs/createAttrObserverConfig')();
  const attrObserverHandler = require('./attrObserverHandler')();

  return function createAttrObserver(sel, fn) {
    var mo = createMutationObserver(sel(), createAttrObserverConfig(), attrObserverHandler(fn));
    return mo;
  }
};