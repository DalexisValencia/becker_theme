import 'jquery.iframetracker';

(function ($) {
  const elementsClicked = [];
  const trackerVideo = () => {
    $('.iframe_wrap iframe').iframeTracker(false);
    $('.iframe_wrap iframe').iframeTracker(null);
    /* eslint-disable */
    $('.iframe_wrap iframe').iframeTracker({
      blurCallback: function (event) {
        if (elementsClicked.indexOf(this._overId) === -1) {
          console.log(this._overTitle, this._overUser);
          pushDatalayer('Becker Vistas Retos', this._overUser, this._overTitle);
          elementsClicked.push(this._overId);
        }
      },
      overCallback: function (element, event) {
        this._overTitle = $(element).parents('.iframe_wrap').attr('data-title');
        this._overUser = $(element).parents('.iframe_wrap').attr('data-user');
        this._overId = $(element).parents('.iframe_wrap').attr('data-id');
      },
      outCallback: function (element, event) {
        this._overTitle = null;
      },
      _overTitle: null,
      _overUser: null,
      _overId: null,
    });
    /* eslint-enable */
  };
  $(window).on('load', () => {
    trackerVideo();
  });
  $('#show-more-videos').on('click', () => {
    setTimeout(() => {
      trackerVideo();
    }, 1500);
  });


  $("#btn-change-challenge").one('click', (e) => {
    /* eslint-disable */
      pushDatalayer('Becker Cambio Video',e.target.attributes['data-user'].value, e.target.attributes['data-challenge'].value);
     /* eslint-enable */
     setTimeout(() => {
        $('#challenge-delete-form').submit()
    }, 1500);
  });


  /* Drupal.behaviors.chlBeckerMessages = {
    attach: function () {
      trackerVideo();
    },
  }; */
})(jQuery, Drupal);
