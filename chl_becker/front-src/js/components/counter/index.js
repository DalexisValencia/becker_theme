(function ($) {
  const navInfo = window.navigator.appVersion.toLowerCase();
  let so = 'Sistema Operativo';
  const retornarSO = () =>
  {
    if(navInfo.indexOf('win') != -1)
    {
      so = 'Windows';
    }
    else if(navInfo.indexOf('linux') != -1)
    {
      so = 'Linux';
    }
    else if(navInfo.indexOf('mac') != -1)
    {
      so = 'Macintosh';
    }
    return so
  }
  const uploadCounter = () => {
    if ($('[end-date]')[0]) {
      $('[end-date]').each((i, obj) => {
        const DATE_TARGET = new Date(retornarSO() !== 'Macintosh' ? $(obj)[0].attributes['end-date'].value : $(obj)[0].attributes['end-date'].value.replace(' ', 'T'));
        // DOM for render
        const SPAN_DAYS = $(obj)[0].children[0];
        const SPAN_HOURS = $(obj)[0].children[1];
        const SPAN_MINUTES = $(obj)[0].children[2];
        const SPAN_SECONDS = $(obj)[0].children[3];
        // Milliseconds for the calculations
        const MILLISECONDS_OF_A_SECOND = 1000;
        const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
        const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
        const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

        /**
         * Method that updates the countdown and the sample
         */
        function updateCountdown() {
          // Calcs
          const NOW = new Date();
          const DURATION = DATE_TARGET - NOW;
          const REMAINING_DAYS =
            Math.floor(DURATION / MILLISECONDS_OF_A_DAY) < 10
              ? '0' + Math.floor(DURATION / MILLISECONDS_OF_A_DAY)
              : Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
          const REMAINING_HOURS =
            Math.floor(
              (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR,
            ) < 10
              ? '0' +
                Math.floor(
                  (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR,
                )
              : Math.floor(
                  (DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR,
                );
          const REMAINING_MINUTES =
            Math.floor(
              (DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE,
            ) < 10
              ? '0' +
                Math.floor(
                  (DURATION % MILLISECONDS_OF_A_HOUR) /
                    MILLISECONDS_OF_A_MINUTE,
                )
              : Math.floor(
                  (DURATION % MILLISECONDS_OF_A_HOUR) /
                    MILLISECONDS_OF_A_MINUTE,
                );
          const REMAINING_SECONDS =
            Math.floor(
              (DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND,
            ) < 10
              ? '0' +
                Math.floor(
                  (DURATION % MILLISECONDS_OF_A_MINUTE) /
                    MILLISECONDS_OF_A_SECOND,
                )
              : Math.floor(
                  (DURATION % MILLISECONDS_OF_A_MINUTE) /
                    MILLISECONDS_OF_A_SECOND,
                );

          // Render
          SPAN_DAYS.textContent = REMAINING_DAYS;
          SPAN_HOURS.textContent = REMAINING_HOURS;
          SPAN_MINUTES.textContent = REMAINING_MINUTES;
          SPAN_SECONDS.textContent = REMAINING_SECONDS;
        }

        updateCountdown();
        setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
      });
    }
  };
  $(window).on('load', uploadCounter)
  $("#show-more-challeges").on('click', uploadCounter)
})(jQuery);
