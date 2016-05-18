module.exports = function() {
  return function createCharObserverConfig() { return createMutationObserverConfig(false, false, true); }
};