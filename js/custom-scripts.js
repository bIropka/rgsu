$(document).ready(function () {

    /******************************
     ******* other scripts ********
     ******************************/


    /******************************
     ******* slider scripts *******
     *****************************/
    $('.slider-banner').slick({
        appendArrows: '.slider-banner-controls',
        prevArrow: '.slider-banner-left',
        nextArrow: '.slider-banner-right'
    });

    $('.slider-portfolio').slick({
        appendArrows: '.slider-portfolio-controls',
        prevArrow: '.slider-portfolio-left',
        nextArrow: '.slider-portfolio-right',
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
