module.exports = function() {
  return function createAttrObserverConfig() { return createMutationObserverConfig(true, false, false); }
};