(function ($) {
  $(window).on('click', function () {
    //Hide the menus if visible
    $(`.dropdown-profile`).addClass('hidden');
  });
  $('.arrow-dropdown').on('click', function (event) {
    event.stopPropagation();
    $(`#${this.attributes['data-target'].value}`).removeClass('hidden');
  });
  // scrip menu left
  /*   const menuOpen = document.querySelector('.nav-left .menu-open');
  const menuClose = document.querySelector('.nav-left .menu-close');
  const menuWrapper = document.querySelector('.nav-left .menu-wrapper'); */

  // scrip menu top hamburguesa

  function navToggle() {
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('menu-top');

    btn.classList.toggle('open');
    nav.classList.toggle('openm');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  }
  const btn = document.getElementById('menuBtn');
  btn.addEventListener('click', () => {
    navToggle();
  });
})(jQuery);
