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
      nav_element.show().attr("aria-hidden","false");
    } else {
      nav_element.hide().attr("aria-hidden","true");
    }
  }
  toggleMenu();
});
