'use strict';
// Go TOP
$(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.go-top').addClass('expand');
            $('.page-header-alpha').addClass('scroll')
        } else {
            $('.go-top').removeClass('expand');
            $('.page-header-alpha').removeClass('scroll')
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


});

function c(l) {
    console.log(l);
}
var $this = $(this);
$("html").easeScroll();
//OWL CAROUSEL
$(document).ready(function() {
    // Declare Carousel jquery object
    var owl = $('.owl-carousel');

    // Carousel initialization
    owl.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        center: true,
        navSpeed: 500,
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        items: 1
    });


    // add animate.css class(es) to the elements to be animated
    function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function() {
            var $elem = $(this);

            var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
            $elem.addClass($animationType).one(animationEndEvent, function() {

                $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
            });
        });
    }

    // Fired before current slide change
    owl.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation($elemsToanim, 'out');

    });

    // Fired after current slide has been changed
    var round = 0;
    owl.on('changed.owl.carousel', function(event) {

        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");

        setAnimation($elemsToanim, 'in');
    })

    owl.on('translated.owl.carousel', function(event) {
        console.log(event.item.index, event.page.count);

        if (event.item.index == (event.page.count - 1)) {
            if (round < 1) {
                round++
                console.log(round);
            } else {
                owl.trigger('stop.owl.autoplay');
                var owlData = owl.data('owl.carousel');
                owlData.settings.autoplay = false; //don't know if both are necessary
                owlData.options.autoplay = false;
                owl.trigger('refresh.owl.carousel');
            }
        }
    });

});


//Navbar
var icon = $('.navbar-toggler');

icon.click(function() {
    $('.menu-i').toggleClass('open-nav');
    $('#navbarMenu').toggleClass('menu-visible');

})

/*=========================================================================
      Fotos carousel
   =========================================================================*/

function getSlide() {
    var wW = $(window).width();
    if (wW < 601 && wW > 500) {
        return 2;
    } else if (wW < 500) {

    } else {
        return 3;
    }

}
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: getSlide(),
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: false,
    pagination: '.screen-pagination',
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true,
    }
});

/*=========================================================================
      Fotos carousel
   =========================================================================*/


/*=========================================================================
   JS TILT
=========================================================================*/



$(document).ready(function() {
    var ua = navigator.userAgent.toLowerCase()
    var es_s = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            $('.js-tilt').tilt({
                glare: true,
                maxGlare: .5,
                scale: 1.1
            })
        } else {
            alert("2") // Safari
        }

    } else {
        $('.js-tilt').tilt({
            glare: true,
            maxGlare: .5,
            scale: 1.1
        })
    }



})