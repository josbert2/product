$('.navbar-nav-menu a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 48;
    console.dir(scrollPoint);

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

});
$('.mouse-whell').on('click', function() {
    var v = "data-anchor='who'";
    $('body,html').animate({
        scrollTop: 700
    }, 500);

})
$('.nav-footer-f a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll-f'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 48;
    console.dir(scrollPoint);

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {

        $('main section').each(function(i) {
            if ($(this).position().top <= windscroll - 150) {
                $('.navbar-nav-menu a.active').removeClass('active');
                $('.navbar-nav-menu a').eq(i).addClass('active');
            }
        });

    } else {

        $('.navbar-nav-menu').removeClass('fixed');
        $('.navbar-nav-menu a.active').removeClass('active');
        $('.navbar-nav-menu a:first').addClass('active');
    }

}).scroll();