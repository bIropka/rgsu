$(document).ready(function () {

    /******************************
     ******* other scripts ********
     ******************************/

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest($('.custom-select')).length){
            $('.custom-select').removeClass('active');
            $('.custom-select ul').fadeOut(200);
        }

    });

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

    $('.current-value').click(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).siblings('ul').slideUp();
        } else {
            $('.custom-select').removeClass('active');
            $(this).parent().addClass('active');
            $('.custom-select').find('ul').fadeOut(200);
            $(this).siblings('ul').slideDown();
        }
    });
    
    $('.custom-select ul li').click(function() {

        $(this).parent().fadeOut(200);
        $(this).parents('.custom-select').removeClass('active');
        var value = $(this).html();
        $(this).parent().siblings('.current-value').html(value);
        $(this).parents('.custom-select').find('input').val(value);

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
