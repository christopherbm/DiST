module.exports = function() {
  const createMutationObserverConfig = require('./createMutationObserverConfig')();
  
  return function createAttrObserverConfig() { return createMutationObserverConfig(true, false, false); }
};