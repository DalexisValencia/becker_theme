window.addEventListener('load', () => {
  if (document.querySelectorAll('[data-close]')) {
    const buttonClose = document.querySelectorAll('[data-close]');

    buttonClose.forEach(element => {
      element.addEventListener('click', e => {
        document
          .getElementById(e.target.attributes['data-close'].textContent)
          .classList.add('hidden');
      });
    });
  }
  if (document.querySelectorAll('[data-open]')) {
    const buttonClose = document.querySelectorAll('[data-open]');

    buttonClose.forEach(element => {
      element.addEventListener('click', e => {
        document
          .getElementById(e.target.attributes['data-open'].textContent)
          .classList.remove('hidden');
      });
    });
  }
});

(function ($) {
  'use strict';

  // scrip modal

  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle('hidden');
    document.getElementById(modalID + '-backdrop').classList.toggle('hidden');
    document.getElementById(modalID).classList.toggle('flex');
    document.getElementById(modalID + '-backdrop').classList.toggle('flex');
  }

  // Modal

  if ($('.play-video').length > 0) {
    const srcempty = '';
    $('.play-video').on('click', function () {
      toggleModal('modal-id');
      var srcvideo = $(this).attr('data-video-src');
      $('#modal-id iframe').attr(
        'src',
        srcvideo + '?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0',
      );
    });
    $('.close-modal').on('click', function () {
      toggleModal('modal-id');
      $('#modal-id iframe').attr('src', srcempty);
    });
  }

  // Modal 2

  if ($('.play-video-tv').length > 0) {
    const srcempty = '';
    $('.play-video-tv').on('click', function () {
      toggleModal('modal-id-tv');
      var srcvideo = $(this).attr('data-video-src');
      $('#modal-id-tv iframe').attr(
        'src',
        srcvideo + '?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0',
      );
    });
    $('.close-modal').on('click', function () {
      toggleModal('modal-id-tv');
      $('#modal-id-tv iframe').attr('src', srcempty);
    });
  }

  // Modal 3

  if ($('.play-video-ambass').length > 0) {
    const srcempty = '';
    $('.play-video-ambass').on('click', function () {
      toggleModal('modal-id-ambass');
      var srcvideo = $(this).attr('data-video-src');
      $('#modal-id-ambass iframe').attr(
        'src',
        srcvideo + '?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0',
      );
    });
    $('.close-modal').on('click', function () {
      toggleModal('modal-id-ambass');
      $('#modal-id-ambass iframe').attr('src', srcempty);
    });
  }
})(jQuery);
