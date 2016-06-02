module.exports = function() {
  return function attrObserverHandler(fn) {
    return function(muts) { fn(muts); }
  }
};