import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';

import configTranslatePoints from '../../static/paramsAnimationSprite.json';
/**
 * @file
 * Global utilities.
 *
 */
(function($) {
    'use strict';
    console.log(window.innerWidth < 1366 ? 1024 : window.innerWidth < 1440 ? 1366 : window.innerWidth < 1600 ? 1440 : 1600)
        // Beer animation between sliders
    const translatePoints =
        configTranslatePoints[0][
            window.innerWidth < 1366 ? 1024 : window.innerWidth < 1440 ? 1366 : window.innerWidth < 1600 ? 1440 : 1600
        ];
    const moveBeer = () => {
        anime({
            targets: `.animation-beer-slide`,
            translateX: translatePoints[0],
            //scale: translatePoints.scale,
            easing: 'easeInOutQuart',
            opacity: [0, 1],
            delay: 500,
            duration: 1500,
            begin: function() {
                $('#spriteBeerGray').removeClass('opacity-0');
            },
            complete: function() {
                $('.character_spritesheet').removeClass('play');
            },
        });
    };
    const showRedBeer = () => {
        $('.red-beer').removeClass('hidden');
        anime({
            targets: `.red-beer`,
            translateX: '7rem',
            opacity: [0, 1],
            easing: 'easeInOutQuart',
            duration: 1000,
        });
    };

    const nextStep = () => {
        let prevSlide = 0
        $('#slider-animation ').on(
            'beforeChange',
            function(event, slick, currentSlide) {
                prevSlide = $(slick.$slides.get(currentSlide)).attr('data-slick-index')
            })
        $('#slider-animation ').on(
            'afterChange',
            function(event, slick, currentSlide) {
                if ($(slick.$slides.get(currentSlide)).attr('data-slick-index') === '3') {
                    $('#spriteBeerBlack').removeClass('hidden');
                    anime({
                        targets: `#spriteBeerBlack`,
                        opacity: [0, 1],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                        complete: function() {
                            $('#spriteBeerGray').addClass('hidden');
                            $('#spriteBeerGold').addClass('hidden');
                        }
                    });
                    anime({
                        targets: `#spriteBeerGray`,
                        opacity: [1, 0],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                    });
                    anime({
                        targets: `#spriteBeerGold`,
                        opacity: [1, 0],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                    });
                }
                if ($(slick.$slides.get(currentSlide)).attr('data-slick-index') === '4') {
                    $('#spriteBeerGold').removeClass('hidden');
                    anime({
                        targets: `#spriteBeerGold`,
                        opacity: [0, 1],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                        complete: function() {
                            $('#spriteBeerGray').addClass('hidden');
                            $('#spriteBeerBlack').addClass('hidden');
                        }
                    });
                    anime({
                        targets: `#spriteBeerGray`,
                        opacity: [1, 0],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                    });
                    anime({
                        targets: `#spriteBeerBlack`,
                        opacity: [1, 0],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                    });
                }
                if ((prevSlide === '4' && $(slick.$slides.get(currentSlide)).attr('data-slick-index') === '0') || ($(slick.$slides.get(currentSlide)).attr('data-slick-index') === '2' && prevSlide === '3')) {
                    $('#spriteBeerGray').removeClass('hidden');
                    anime({
                        targets: `#spriteBeerGray`,
                        opacity: [0, 1],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                        complete: function() {
                            $('#spriteBeerGold').addClass('hidden');
                            $('#spriteBeerBlack').addClass('hidden');
                        }
                    });
                    anime({
                        targets: `#spriteBeerGold`,
                        opacity: [1, 0],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                    });
                    anime({
                        targets: `#spriteBeerBlack`,
                        opacity: [1, 0],
                        easing: 'easeInOutQuart',
                        duration: 1870,
                    });
                }
                anime({
                    targets: `.animation-beer-slide`,
                    translateX: translatePoints[
                        $(slick.$slides.get(currentSlide)).attr('data-slick-index')
                    ],
                    //scale: translatePoints.scale,
                    easing: 'easeInOutQuart',
                    duration: 1860,
                    begin: function() {
                        $('.red-beer').addClass('hidden');
                        $('.character_spritesheet').addClass('play');
                    },
                    complete: function() {
                        $('.character_spritesheet').removeClass('play');
                        if (
                            $(slick.$slides.get(currentSlide)).attr('data-slick-index') ===
                            '3'
                        ) {
                            showRedBeer();
                        }
                    },
                });
            },
        );
    };

    //Slick slider
    $('.slick-wrap').on('init', function(event, slick) {
        var dots = $('.slick-dots li');
        dots.each(function(k) {
            $(this)
                .find('button')
                .addClass('heading' + k);
        });
        var items = slick.$slides;
        items.each(function(k) {
            var text = $(this).find('h2').text();
            $('.heading' + k).text(text);
        });
    });

    function slickSliderInit($slick) {
        $slick
            .slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: 'progressive',
                arrows: true,
            })
            .slickAnimation();
    }

    function slickSlidernovelties($slick) {
        $slick.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    function slickSlidertv($slick) {
        $slick.slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    function slickSliderproduct($slick) {
        $slick.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            }, ],
        });
    }

    function slickSlidervarieties($slick) {
        $slick
            .slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            })
            .slickAnimation();
    }

    /*
      Paramas
      @$slick: Container slicks.
      $arrowComponent: Container arrow icons
      itemsDesktop: Int amount item desktop 
    */

    function createSlickSliderPosts($slick, $arrowComponent, itemsDesktop) {
        $slick
            .slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: itemsDesktop,
                slidesToScroll: 1,
                arrows: true,
                // appendArrows: $arrowComponent "",
                initialSlide: 0,
                responsive: [{
                        breakpoint: 1980,
                        settings: {
                            appendArrows: $arrowComponent,
                            slidesToShow: itemsDesktop,
                            slidesToScroll: 1,
                            arrows: true,
                            initialSlide: 0,
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            appendArrows: $arrowComponent,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: true,
                            initialSlide: 0,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            appendArrows: $arrowComponent,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: true,
                            initialSlide: 0,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1.5,
                            slidesToScroll: 1,
                            arrows: false,
                            initialSlide: 0,
                            centerMode: true,
                            centerPadding: '20%',
                            // infinite: false,
                        }
                    }
                ]
            })
            .slickAnimation();
    }

    // Slick slider home banner
    if ($('.slider_banner_principal').length > 0) {
        slickSliderInit($('.slider_banner_principal'));
        $(window).on('load', () => {
            if (window.innerWidth >= 1320) {
                moveBeer();
                nextStep();
                $("#slide-doble-beer").removeClass("slide-4")
                $("#slide-doble-beer").addClass("slide-1")
            }
        });
    }
    // Slick slider home novelties
    if ($('.slider_banner_novelties').length > 0) {
        slickSlidernovelties($('.slider_banner_novelties'));
    }
    // Slick slider becker TV
    if ($('.slider_banner_tv').length > 0) {
        slickSlidertv($('.slider_banner_tv'));
    }
    // Slick slider productos
    if ($('.slider_banner_productos').length > 0) {
        slickSliderproduct($('.slider_banner_productos'));
    }
    // Slick slider productos
    if ($('.slider_banner_varieties').length > 0) {
        slickSlidervarieties($('.slider_banner_varieties'));
    }
    // Slick Slider posts (10 featured) page voting
    if ($('.component-top-ten-posters--wrapper-posts').length > 0) {
        createSlickSliderPosts($('.component-top-ten-posters--wrapper-posts'), $(".component-posts--arrow-navigation"), 4);
    }

    // Slick Slider posts page voting
    if ($('.component-more-posts--postsList').length > 0) {
        createSlickSliderPosts($('.component-more-posts--postsList'), $(".component-posts--arrow-navigation-"), 4);
    }

    // Slider posts page profile
    if ($(".component--posts-slides").length > 0) {
        createSlickSliderPosts($('.component--posts-slides'), $(".component-slide-navigation--arrows"), 3);
    }

    // Slider unlocked challengers
    if ($(".component-unlocked-challenge--list").length > 0) {
        createSlickSliderPosts($('.component-unlocked-challenge--list'), $(".unset"), 3);
    }

    //Open modal vote
    if ($("#confirmVote").length > 0) { //if modal exits
        $(".btn-cancel").on("click", function() {
            $("#confirmVote").removeClass("active");
        });
        $(".btn-example-openmodal").on("click", function() {
            $("#confirmVote").addClass("active");
        })
        $("#confirmVote .close-modal").on("click", function() {
            $("#confirmVote").removeClass("active");
        })
    }

    // cerrar teclado en mobile
    var hideKeyboard = function() {
        document.activeElement.blur();
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].blur();
        }
    };
    const $finalInputs = $(
        '[data-element="year-04"], [data-element="month-02"], [data-element=day-02]',
    );
    $finalInputs.on('keyup', function() {
        if ($(this).val() !== '') {
            hideKeyboard();
        }
    });

    /* $('document').ready(function () {
      $('#btn-hero-video').click(function () {
        var hero_video = $(this).data('video');
        $('#hero-video')
          .html(
            '<iframe id="ytplayer" type="text/html" width="100%" height="900"\
     src="' +
              hero_video +
              '?autoplay=1&origin=https://google.com"\
     frameborder="0" allow="autoplay"></iframe>',
          )
          .fadeIn();
      });
    }); */

    AOS.init();
})(jQuery);

// jQuery('.carousel').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });