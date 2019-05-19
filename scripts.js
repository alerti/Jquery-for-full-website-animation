(function($) {
    'use strict';

    jQuery(document).ready(function() {


        /* Preloader */

        $(window).load(function() {
            $('.preloader').delay(1000).fadeOut(3000);
        });



        /* Smooth Scroll */
        /*you can use this*/
        /*$('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        /*or this */
        /*$(document).ready(function() {
            $("a.smoth-scroll").click(function(event) {
                event.preventDefault();
                $("html,body").animate({
                    scrollTop: $($(this).attr("href")).offset().top
                }, 1000);
            });
        });*/
        /*or this */  //i just found several ways of doing it. selecting href elemtents attached to Div smooth-scroll
        $("a.smoth-scroll").click(function(e) {
            e.preventDefault();
            var dest = $(this).attr('href');
            console.log(dest);
            $('html,body').animate({ scrollTop: $(dest).offset().top }, 1000);
        });


        /* Scroll Navigation Background Change with Sticky Navigation */

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
/*lets filter invalid emails */
        function ValidateEmail(inputText) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (inputText.value.match(mailformat)) {
                document.form.email.focus();
                return true;
            } else {
                alert("You have entered an invalid email address!");
                document.form.email.focus();
                return false;
            }
        }


        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

        });




        /* Scroll To Top */

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });


        $('.scroll-to-top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 5000);
            return false;
        });



        /* Tooltip */

        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })



        /* Ajaxchimp for Subscribe Form */

        $('#mc-form').ajaxChimp();




        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();



        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',

            gallery: { enabled: true },
            zoom: {
                enabled: true,
                duration: 500

            },


            image: {
                markup: '<div class="mfp-figure portfolio-pop-up">' +
                    '<div class="mfp-close"></div>' +
                    '<div class="mfp-img"></div>' +
                    '<div class="mfp-bottom-bar portfolio_title">' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</div>',

                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }


        });


        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle: "fadeUp",
            paginationNumbers: true,
            paginationSpeed: 10000
        });




        /* Counter for styling */

        $('.statistics').appear(function() {
            var counter = $(this).find('.statistics-count');
            var toCount = counter.data('count');

            $(counter).countTo({
                from: 0,
                to: toCount,
                speed: 5000,
                refreshInterval: 50
            })
        });


    });

})(jQuery);
