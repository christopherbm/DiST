module.exports = function() {
  // var config = { attributes: true, childList: true, characterData: true };
  return function createMutationObserverConfig(attr, children, charData) {
    return { attributes: attr, childList: children, characterData: charData };
  }
};