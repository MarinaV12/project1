'use strict'

$(document).ready(function(){
    $(('.slider1')).slick({
        autoplay: true,
        speed: 1500,
        dots: true,
        arrows: false,
    });
});

// var bodyWidth = $('body').width();
let mediaQuery = window.matchMedia("(min-width: 900px)")
function myFunction(x) {
    if (x.matches) {
        $(document).ready(function(){
            $('.slider2').slick({
                autoplay: false,
                speed: 1500,
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
            });
        });
    } else {
        $(document).ready(function(){
            $('.slider2').slick({
                autoplay: false,
                speed: 1500,
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });
    }
}
mediaQuery.addListener(myFunction)
myFunction(mediaQuery)
