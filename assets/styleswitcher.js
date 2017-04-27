$(function() {

  // HTML IDs of our elements
  var highContrast = $('#style-high')[0];
  var normalContrast =  $('#style-main')[0];
  var contrastToggle = $('.contrast__toggle');

  // Track contrast state across pages
  var contrastEnabled = localStorage.getItem('highContrast') || false;

  // Functions to enable and disable appropriate stylesheets
  function enableHigh() {
    highContrast.disabled = false;
    highContrast.rel = 'stylesheet';
    normalContrast.disabled = true;
    normalContrast.rel = 'stylesheet alternate';
  };

  function enableMain() {
    normalContrast.disabled = false;
    normalContrast.rel = 'stylesheet';
    highContrast.rel = 'stylesheet alternate';
    highContrast.disabled = true;
  };

  // Bind the events to the page toggle
  contrastToggle.click(function() {
    // JSON-ify it to clean up localStorage turning true into a string
    contrastEnabled = !JSON.parse(contrastEnabled);
    if(contrastEnabled) {
      enableHigh();
    } else {
      enableMain();
    }
    localStorage.setItem('highContrast', contrastEnabled);
  });

  // Check when the page is loaded if we need to enable high contrast
  if(contrastEnabled == "true") {
    enableHigh();
  }

})
