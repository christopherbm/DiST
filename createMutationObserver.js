module.exports = function() {
  // !!!
  return function createMutationObserver(el, config, fn) {
    setDataAttr(el, 'observed', true);
    var mo = new MutationObserver(fn); 
    mo.observe(el, config);
    return mo;
  }
};