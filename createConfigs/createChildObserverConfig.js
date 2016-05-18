module.exports = function() {
  const createMutationObserverConfig = require('./createMutationObserverConfig')();
  
  return function createChildObserverConfig() { return createMutationObserverConfig(false, true, false); }
};