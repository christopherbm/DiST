module.exports = function() {
  const createStyleObserver = require('./createStyleObserver')();

  return function createOnDisplayChangeObserver(sel) {
    createStyleObserver(sel, 'display', (sel, oldStyle, newStyle) => {
      sel().dispatchEvent(new CustomEvent('display.change', {
        'detail': {'sel': sel, 'old': oldStyle, 'new': newStyle}
      }));
    });
  }
};