module.exports = function() {
  function observe(el) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        //console.log(mutation);
        el.dispatchEvent(new CustomEvent(mutation.type, 
          {
            detail: {
              mutation: mutation
            }
          }));
      });    
    });
    var config = { attributes: true, childList: true, characterData: false };
    observer.observe(el, config);
    return observer;
  }
};