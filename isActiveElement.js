module.exports = function() {
  const setDataAttr = require('myrs-js-core/fe/setDataAttr')();

  return function isActiveElement(el) {
    return setDataAttr(el, 'isActive', true);
  }
};