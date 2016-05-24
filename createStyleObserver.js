module.exports = function() {
  const createMutationObserver = require('./createMutationObserver')();
  const createAttrObserverConfig = require('./createConfigs/createAttrObserverConfig')();
  const styleObserverHandler = require('./styleObserverHandler')();
  const setDataAttr = require('myrs-js-core/fe/setDataAttr')();
  const capitalize = require('myrs-js-core/shared/capitalize')();
  const getStyle = require('myrs-js-core/fe/getStyle')();

  return function createStyleObserver(sel, style, fn) {
    var el = sel();
    var mo = createMutationObserver(el, createAttrObserverConfig(), styleObserverHandler(sel, fn));
    setDataAttr(el, 'obs' + capitalize(style), getStyle(el, style));
    el = null;
    return mo;
  }
};