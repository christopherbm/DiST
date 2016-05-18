module.exports = function() {
  return function createChildObserverConfig() { return createMutationObserverConfig(false, true, false); }
};