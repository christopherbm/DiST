module.exports = function() {
  return function styleObserverHandler(sel) {
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