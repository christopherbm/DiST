module.exports = function() {
  return function createStyleObserver(sel, style, fn) {
    var el = sel();
    var mo = createMutationObserver(el, createAttrObserverConfig(), styleObserverHandler(sel));
    setDataAttr(el, 'obs' + capitalize(style), getStyle(el, style));
    el = null;
    return mo;
  }
};