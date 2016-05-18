module.exports = function() {
  const createMutationObserverConfig = require('./createMutationObserverConfig')();
  
  return function createCharObserverConfig() { return createMutationObserverConfig(false, false, true); }
};