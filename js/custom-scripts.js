$(document).ready(function () {

    /******************************
     ******* other scripts ********
     ******************************/

    $('.header-nav > li').hover(
        function() {
            if ($(window).width() > '980'){
                $(this).addClass('active');
                $(this).find('ul').stop().fadeIn(200);
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).removeClass('active');
                $(this).find('ul').stop().fadeOut(200);
            }
        }
    );

    $('.header-nav > li').click(function() {
        if ($(window).width() < '981'){
            $(this).toggleClass('active');
            $(this).find('ul').stop().fadeToggle(200);
        }
    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
    });


    /******************************
     ******* slider scripts *******
     *****************************/
    $('.slider-banner').slick();

    $('.slider-courses').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


});
