

(function($){
    $(function(){

/***********************************************
 * Variables
 ***********************************************/

var $window = $(window),
    $wHeight = $(window).height(),
    $wWidth = $(window).width(),
    $nav = $("nav"),
    $ulNav = $("ul.nav");

/***********************************************
 * Helpers
 ***********************************************/

// We use a debouncer to "throttle" the event listeners
// that would otherwise trigger too often and may even
// bottleneck certain CPUs.
//
// This way, functions are called only as often as we specify
// in the timer (timeout).

var deBouncer = function($,cf,of, interval){
    // deBouncer by hnldesign.nl
    // based on code by Paul Irish and the original debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || interval);
        };
    };
    jQuery.fn[cf] = function(fn){  return fn ? this.bind(of, debounce(fn)) : this.trigger(cf); };
};


/***********************************************
 * Navigation
 ***********************************************/

/**
 * Navigation toggle
 */


/*** Debounce and add click event listener ***/

deBouncer(jQuery,'clickOutside', 'click', 100);


var navToggle = (function() {

    var $darken = $('#content-darken'),
        $btn = $('nav #btn-toggle');

    // Menu expands while the rest of the screen darkens
    //
    // If toggle button is clicked ...
    $btn.click(function() {
        // ... and nav is expanded, fade out and hide nav
        if ($nav.hasClass("expanded")) {
            $darken.fadeOut(500, "easeOutQuint");
            $nav.removeClass("expanded");
            $ulNav.slideUp(250);
        } 
        // ... else, fade in and expand nav
        else {
            $darken.fadeIn(750, "easeOutQuint");
            $nav.addClass("expanded");
            $ulNav.slideDown(250);
        }
    });

    /* For mobile: hide nav when clicked outside */

    // On click
    $(window).clickOutside(function(e) {

        if ($nav.hasClass("expanded")) {

            // if the target of the click isn't nav, nor a descendant of nav
            if (!$nav.is(e.target) && $nav.has(e.target).length === 0) {
                // Fade out overlay
                $darken.fadeOut(500, "easeOutQuint");

                // Hide nav ...
                $nav.removeClass("expanded");
                $(".nav").slideUp(250);
                // ... and reset it to its original position
                $(".nav").animate({"left": '0'}, 150, 'swing');
            }
        }
    });
})();


/**
 * Search for submenus
 */

var submenus = (function() {

    $(".nav li a").each(function() {
    // If menu has submenus
        if ($(this).next().length > 0) {
            // make it a parent
            $(this).addClass("parent");
        }
    });
})();


/**
 * Show or hide toggle menu button
 */

/*** Debounce and add click event listeners ***/

deBouncer(jQuery,'toggletoggle', 'load resize', 100);


var btnToggle = (function() {

    $(window).toggletoggle(function(e) {
        // If small device ...
        if ($(window).width() < 992) {

            /* Going deeper into the menu */

            // Level 0 -> 1
            // There are a few things we need to do when clicking on a menu item
            // First, we want to only target the parents,
            // not the back links
            // so that we only scroll in depth.
            $(".nav > li > a.parent").click(function() {

                /* Toggle submenus */

                // Since mobile devices can not rely on hover
                // we toggle submenus only when clicked
                //
                // Find first submenu and show it
                $(this).next().show();

                /* Change back button text */

                // Dynamically change the back button text
                // depending on the submenu we are currently in

                // Get child menu name ...
                var backText = $(this).text();
                // ... and change back button's text accordingly
                $(".nav li.back a").text(backText);

                /* Animate the menu */

                // Shift entire menu to the left when clicked
                $(".nav").animate({"left": '-100%'}, 150, 'swing');
            });
            // Level 1 -> 2
            $(".nav li li > a.parent").click(function() {
                $(this).next().show();
                var backText = $(this).text();
                $(".nav li li.back a").text(backText);
                $(".nav").animate({"left": '-200%'}, 150, 'swing');
            });


        } 
        // else if large device
        else {
            // Show menu on hover as opposed to click
            // and add a helper class
            $(".nav li").hover(function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
            });
        }

    });

})();


/**
 * Back up one level
 */

var backOneLevel = (function(){

    $(".nav li.back a").click(function() {
        // Move nav one screen offscreen
        $(".nav").animate({"left": '+=100%'}, 150, 'swing');
        // Prevent overlaying of panels
        $(this).closest("ul").delay(300).hide(0);
    });
})();


/**
 * Affix nav to the top of the window for large screens
 */

/*** Debounce ***/

// Works, but does not transition well to smaller screens if resized.
// Resize listener + debounce could work, but CPU activity always rises a lot
// during the resize.
// Need to find another solution.


// deBouncer(jQuery,'affix', 'scroll resize', 10);

// // Store nav's original position in a variable
// var $navPos = $nav.position().top;

// var affixNav = $(window).affix(function(e) {

//     // Check if using large screen
//     // and if we have scrolled past the nav
//     //
//     // We need to know the position of nav at all times whilst the window is large
    
//     // If so, affix
//     if ( ($(window).width() >= 992) && ($(window).scrollTop() >= $navPos) ) {
//         $nav.addClass("affix");
//     } else {
//         $nav.removeClass("affix");
//     }
// });

/***********************************************
 * Back to top
 ***********************************************/

/**
* Hook and animation
*/

var backTop = (function() {
    $('.back-to-top, .squiggle').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})();

/***********************************************
 * Random backgrounds
 ***********************************************/

/**
* Change backgrounds on refresh
*/

var randomBg = (function() {
    var images = ['bg-x1200-restaurant-tables.jpg', 'bg-x1200-restaurant-long-table.jpg'];
    $('#main-bg').css({'background-image': 'url(../public/assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
})();


    }); // end of document ready
})(jQuery); // end of jQuery name space