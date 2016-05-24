module.exports = function() {
  const setDataAttr = require('myrs-js-core/fe/setDataAttr')();
  const capitalize = require('myrs-js-core/shared/capitalize')();
  const getStyle = require('myrs-js-core/fe/getStyle')();
  const getDataAttr = require('myrs-js-core/fe/getDataAttr')();

  return function styleObserverHandler(sel, style, fn) {
    return function(muts) {
      var el = sel();
      muts.map(function(mut) {
        if (mut.attributeName === 'style') {
          var oldVal = getDataAttr(el, 'obs' + capitalize(style));
          setDataAttr(el, 'obs' + capitalize(style), getStyle(el, style));
          fn(oldVal, getDataAttr(el, 'obs' + capitalize(style)));
        }
      });
      el = null;
    }
  }
};