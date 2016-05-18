module.exports = function() {
  return function childrenObserverHandler(added, removed) {
    return function(muts) {
      muts.map(function(mut) {
        if (mut.addedNodes.length > 0) { added(mut.addedNodes); }
        if (mut.removedNodes.length > 0) { removed(mut.removedNodes); }
      });
    }
  }
};