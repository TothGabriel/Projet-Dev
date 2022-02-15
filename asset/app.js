$(document).ready(function() {

    //-----------------------Menu reset --------------------------//
    function menuReset() {
        $('#main-menu').removeClass('menu-open');
        $('.mask-menu').removeClass('menu-open');
        $('.sub-menu > ul').removeClass('active');
        $('.toggle-menu').removeClass('active');
    };
    $(window).resize(function() {
        menuReset();
    });
    //----------------------Menu open --------------------------//
    function menuOpen() {
        $('.mask-menu').toggleClass('menu-open');
        $('#main-menu').toggleClass('menu-open');
        $('.toggle-menu').toggleClass('active');
    }
    //-----------------------Toggle menu--------------------------//
    $('.toggle-menu').on('click', function() {
        if ($(this).hasClass("active")) {
            menuReset();
        } else {
            menuOpen();
        }
    });

    // ---------------------breackPoint---------------------//
    if ($(window).width() < 992) {
        $('.sub-menu-down.sub-menu> a').click(function(e) {
            e.preventDefault();
        })
    }

});