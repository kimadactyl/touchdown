$(function() {
  let nav_visible = true;
  let nav_element = $(".nav__menu");
  let nav_toggle = $(".nav__toggle");

  nav_toggle.click(function() {
    toggleMenu();
  })

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
  }
  toggleMenu();
});
