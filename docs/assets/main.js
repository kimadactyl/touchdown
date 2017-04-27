$(function() {
  var nav_visible = true;
  var nav_element = $(".nav__menu");
  var nav_toggle = $(".nav__toggle");

  $('.contrast__toggle').click(function(e) {
    // Stop the contrast switcher messing with the nav toggle
    e.stopPropagation();
  });

  function toggleMenu() {
    nav_visible = !nav_visible
    if (nav_visible) {
      nav_element.addClass("nav--visible")
                 .removeClass("nav--hidden")
                 .attr("aria-hidden","false");
    } else {
      nav_element.addClass("nav--hidden")
                 .removeClass("nav--visible")
                 .attr("aria-hidden","true");
    }
  };

  nav_toggle.click(function() {
    toggleMenu();
  });

  toggleMenu();
});
