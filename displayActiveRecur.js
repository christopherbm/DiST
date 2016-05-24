module.exports = function() {
  const getChildren = require('myrs-js-core/fe/getChildren')();

  function displayActiveRecur(el) {
    if (el.dataset.isActive) {
      el.style.display = 'block';
      getChildren(el).map(function(child) { displayActiveRecur(child); });
    }
  }
};