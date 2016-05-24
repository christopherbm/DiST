module.exports = function() {
  const setDataAttr = require('myrs-js-core/fe/setDataAttr')();

  return function createMutationObserver(el, config, fn) {
    setDataAttr(el, 'observed', true);
    var mo = new MutationObserver(fn); 
    mo.observe(el, config);
    return mo;
  }
};