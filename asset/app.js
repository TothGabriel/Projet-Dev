$(document).ready(function() {

    // config_CSS à commenter
    // function config_CSS() {
    //     var mainMenuWidth = $('#main-menu').width();
    //     var menuLeftWidth = $('#main-menu .menu-left').width();
    //     var menuRightWidth = $('#main-menu .menu-right').width();
    //     var slideMenuWidth = $('#main-menu #slide-menu').width();
    //     var breackpoint = slideMenuWidth + menuLeftWidth + menuRightWidth;
    //     var breackpointMenuRight = menuLeftWidth + menuRightWidth;
    //     console.log('--------- CONFIG navigation.css ---------')
    //     console.log('valeur optimale de la variable CSS --menu-left-and-right-width = ' + Math.round(Math.max(menuLeftWidth, menuRightWidth)) + 'px')
    //     console.log('breackpoint optimal = ' + Math.round(breackpoint) + 'px')
    //     console.log('breackpoint menu-right optimal = ' + Math.round(breackpointMenuRight) + 'px')
    //     console.log('----------------------------------------')
    // };
    // config_CSS()

    // low-menu
    // var content = $("#main-menu .menu-right").html();
    // $("#slide-menu").prepend('<div class="low-menu"></div>');
    // $("#slide-menu .low-menu").prepend(content);


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

    // -------------------------------SUBMENU------------------------------- //
    // $('.sub-menu > ul > li.active').each(function() {
    //     $(this).parent('ul').parent('.sub-menu').addClass('active');
    // });
    // ---------------------breackPoint---------------------//
    if ($(window).width() < 992) {
        $('.sub-menu-down.sub-menu> a').click(function(e) {
            e.preventDefault();
        })
    }
    //----------------------HTML--------------------------//
    // $('.sub-menu').each(function() {
    //     var item_name = $(this).children('a').text();
    //     var item_url = $(this).children('a').attr("href");
    //     var return_menu = $(this).attr("data-return");
    //     $(this).prepend('<a class="sub-menu-title">' + item_name + '<i class="fal fa-angle-right fa-lg ms-3"></i></a>');
    //     if (item_url != "#") {
    //         $(this).children('ul').prepend('<li><a href="' + item_url + '" class="sub-menu-page-link"></i>' + item_name + '</a></li>');
    //     }
    //     $(this).children('ul').prepend('<li class="sub-menu-return"><a><i class="fal fa-angle-left fa-lg me-2"> </i>' + return_menu + '</a></li>');
    // });

    // $('.sub-menu-title').click(function() {
    //     $(this).siblings('ul').toggleClass('active');
    // });
    // $('.sub-menu-return').click(function() {
    //     $(this).parent().toggleClass('active');
    // });


});