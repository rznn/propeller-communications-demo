
/***********************************************
 * Preloader animation
 ***********************************************/

var preloader = (function() {

    /* Timeline */
    var tlMain = new TimelineLite(),
        tlPropeller = new TimelineLite();

    /* Animate */

    // I separated the timelines so they are easier to manage
    // One for the text, one for the propeller
    // Then I limited both to the same time length

    // Text Animation

    // START first phase
    // Stop scroll during preloader animation
    tlMain
        // Hide overflow so visitors can't scroll during the animation
        // ending up in weird parts of the page
        //
        // Disabled for now because hiding the scrollbar pushes the div
        // during the animation and ruins it
        // .to( $("body.home-page"), 0, { overflow : "hidden" } )
        .from( $(".modal"), 0.5, { display:'block', ease: Power1.easeIn } )
        .to( $(".pre-phase-1"), 0, { display:'block', autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-1 > span"), 1, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(1)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(2)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(3)"), 0.34, { autoAlpha:1, ease: Power1.easeIn } )

        
        .to( $(".pre-phase-1 .ellipsis span:nth-child(1)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "fadeEllipsis" )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(2)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "fadeEllipsis" )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(3)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "fadeEllipsis" )

        .to( $(".pre-phase-1 .ellipsis span:nth-child(1)"), 0.33, { autoAlpha:1, ease: Power1.easeOut } )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(2)"), 0.33, { autoAlpha:1, ease: Power1.easeOut } )
        .to( $(".pre-phase-1 .ellipsis span:nth-child(3)"), 0.34, { autoAlpha:1, ease: Power1.easeOut } )

    // END first phase
        .to( $(".pre-phase-1"), 0.5, { marginTop:-25, autoAlpha:0, display:'none', ease: Power1.easeIn }, "endPhase1" )  


    // START second phase
        .from( $(".pre-phase-2"), 1, { marginTop:50, ease: Power1.easeIn }, "startPhase2" )
        .to( $(".pre-phase-2"), 0, { display:'block', autoAlpha:1, ease: Power1.easeIn }, "startPhase2" )
        .to( $(".pre-phase-2 > span"), 1, { autoAlpha:1, ease: Power1.easeIn }, "startPhase2" )

    // 3...
        // Only target countdown numbers
        .to( $(".pre-phase-2 .countdown > span"), 0.5, { autoAlpha:1, ease: Power1.easeIn }, "-=0.25" )

        // Reveal ellipsis
        .to( $(".pre-phase-2 .ellipsis span:nth-child(1)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(2)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(3)"), 0.34, { autoAlpha:1, ease: Power1.easeIn } )

        // Hide ellipsis
        .to( $(".pre-phase-2 .countdown > span"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown3" )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(1)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown3" )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(2)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown3" )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(3)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown3" )

    // 2...
        // Change text value before it's revealed
        .to( $(".pre-phase-2 .countdown > span"), 0, { text:"2" } )
        .to( $(".pre-phase-2 .countdown > span"), 0.5,{ autoAlpha:1, ease: Power1.easeIn } )

        // Reveal ellipsis
        .to( $(".pre-phase-2 .ellipsis span:nth-child(1)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(2)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(3)"), 0.34, { autoAlpha:1, ease: Power1.easeIn } )

        // Hide ellipsis
        .to( $(".pre-phase-2 .countdown > span"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown2" )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(1)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown2" )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(2)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown2" )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(3)"), 0.25, { autoAlpha:0, ease: Power1.easeIn }, "endCountdown2" )

    // 1...
        // Change text value before it's revealed
        .to( $(".pre-phase-2 .countdown > span"), 0, { text:"1" } )
        .to( $(".pre-phase-2 .countdown > span"), 0.5,{ autoAlpha:1, ease: Power1.easeIn } )

        // Reveal ellipsis
        .to( $(".pre-phase-2 .ellipsis span:nth-child(1)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(2)"), 0.33, { autoAlpha:1, ease: Power1.easeIn } )
        .to( $(".pre-phase-2 .ellipsis span:nth-child(3)"), 0.34, { autoAlpha:1, ease: Power1.easeIn } )

        // Hide ellipsis
        .to( $(".modal-inner"), 0.5, { marginTop:-25, autoAlpha:0, display:'none', ease: Power1.easeIn }, "+=0.25" )
        .to( $(".modal"), 0.5, { autoAlpha:0, display:'none', ease: Power1.easeIn }, "+=0.5" )
        // Enable scrolling
        .to( $("body"), 0, { overflow : "auto"} );

    // Control the text's animation duration
    tlMain.duration( 10 );

    // Propeller Animation

    tlPropeller.delay(0.25) // Add a small delay before the rotation starts
        // Initial swaying of the propeller
        .to( $(".propeller"), 1.5, { rotation:"-15", ease: Power1.easeOut } , "fadeEllipsis" )
        .to( $(".propeller"), 1.5, { rotation:"-10", ease: Power1.easeIn } )
        .to( $(".propeller"), 2.5, { rotation:"-12", ease: Power1.easeOut } )
        // Accelerate and keep a constant speed
        .to( $(".propeller"), 3, { rotation:"360", ease: Power2.easeIn } )
        .to( $(".propeller"), 1, { rotation:"720", ease:Linear.easeNone } )
        .to( $(".propeller"), 1, { rotation:"1080", ease:Linear.easeNone } )
        // Start further acceleration
        .to( $(".propeller"), 0.9, { rotation:"1440", ease:Linear.easeNone } )
        .to( $(".propeller"), 0.8, { rotation:"1800", ease:Linear.easeNone } )
        .to( $(".propeller"), 0.65, { rotation:"2160", ease:Linear.easeNone } )
        .to( $(".propeller"), 0.5, { rotation:"2520", ease:Linear.easeNone } )
        .to( $(".propeller"), 0.4, { rotation:"2880", repeat:2, ease:Linear.easeNone } );

    // Control the propeller's animation speed and duration
    tlPropeller.duration( 10 );

    // Skip animation
    $("#pre-skip > a").click(function(){
        TweenLite.to( $(".modal"), 0.5, { css:{ opacity:0, display:'none'}, ease: Power1.easeIn }, "+=0.5" );
        // Disabled for now, see explanation top
        // Enable scrolling
        // TweenLite.to( $("body"), 0, { css: { "overflow" : "auto"}} );
        tlMain.pause();
        tlPropeller.pause();
    });

})();


(function($){
    $(function(){

/***********************************************
 * Form validation
 ***********************************************/

/**
 * Check if fields are empty or not
 * and display corresponding visual cues
 */

var checkLength = (function() {

    $('#subscribe-form').submit(function() {

        var errors = 0;

        $("#subscribe-form :input").map(function(){
            // trim white spaces 
            if(!$.trim(this.value).length) {

                $(this).closest(".input-wrapper").removeClass('active').removeClass('success');
                $(this).closest(".field-row").removeClass('active').removeClass('success');

                $(this).closest(".input-wrapper").addClass('error').addClass('active');
                $(this).closest(".field-row").addClass('error').addClass('active');
                errors++;
            } else if ($(this).val()) {

                $(this).closest(".input-wrapper").removeClass('active').removeClass('error');
                $(this).closest(".field-row").removeClass('active').removeClass('error');

                $(this).closest(".input-wrapper").addClass('success').addClass('active');
                $(this).closest(".field-row").addClass('success').addClass('active');
            }
        });

        // Need to implement notification #errorwarn
        if(errors > 0){
            $('#errorwarn').text("All fields are required");
            return false;
        }

    });

})();


/***********************************************
 * Form types validation
 ***********************************************/

/**
 * Name input validation
 */

$("input[name='name']").keydown(function (e) {
    // Allow: space, backspace, delete, tab, escape and enter
    if ($.inArray(e.keyCode, [32, 8, 46, 9, 27, 13]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
         // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
         // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a letter

    if ( (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 111) || (e.keyCode >= 186 && e.keyCode <= 191) ) {
        e.preventDefault();
    }

    /* Prevent pasting numbers */

    /* !!! ISSUE !!! */
    // Find a way to stop pasting alpha numerics

    // One way would be on submit, but how about while typing?
    // Keyboard function replaces alphanumerics after typing. Does not work if the user stops typing
    // ex, john doe2 is still accepted because nothing is typed after 2

    // Below functions do not work 100% as intended, they're a rough starting point
    // Build on that


    // from keyboard
    
    // $(this).keyup(function(e) {
    //     if (this.value.match(/[^a-zA-Z]/g)) {
    //         this.value = this.value.replace(/[^a-zA-Z]/g, '');
    //     }
    // });


    // from mouse

    // $(this).on("paste", function(e) {
    //     if (this.value.match(/[^a-zA-Z]/g)) {
    //         this.value = this.value.replace(/[^a-zA-Z]/g, '');
    //     }
    // });

    // $(this).mousedown(function(e){
    //     if (e.button == 2) {
    //         if (this.value.match(/[^a-zA-Z]/g)) {
    //             this.value = this.value.replace(/[^a-zA-Z]/g, '');
    //         }
    //     }
    // });

});

/**
 * Number input validation
 */

$("input[type='number']").keydown(function (e) {
    // Allow: backspace, delete, tab, escape and enter
    if ($.inArray(e.keyCode, [8, 46, 9, 27, 13]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
         // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
         // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {

             return;
    }
    // Ensure that it is a number and stop the keypress otherwise
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

/***********************************************
 * Other
 ***********************************************/

/**
 * Animate birthday input indicators
 */

var animateBday = (function() {

    var $input = $(".input-wrapper.birthday input");
    // animate indicator
    $input.focus(function() {
        $(this).parent().addClass("active");
    });
    // return to initial state
    $input.blur(function() {
        $(this).parent().removeClass("active");
    });

})();


/**
 * Check for valid e-mail
 */

var checkEmail = (function check_v_mail(field) {
    fld_value = document.getElementById(field).value;
    is_m_valid = 0;

    if (fld_value.indexOf('@') >= 1) {
        m_valid_dom = fld_value.substr(fld_value.indexOf('@')+1);

        if (m_valid_dom.indexOf('@') == -1) {

            if (m_valid_dom.indexOf('.') >= 1) {
                m_valid_dom_e = m_valid_dom.substr(m_valid_dom.indexOf('.')+1);

                if (m_valid_dom_e.length >= 1) {
                    is_m_valid = 1;
                }
            }
        }
    }

    if (is_m_valid) {
        update_css_class(field, 2);
        m_valid_r = 1;
    } else {
        update_css_class(field, 1);
        m_valid_r = 0;
    }

    return m_valid_r;
});

/**
 * Success/error highlighting
 */

 // Need to implement warning

var updateCssClass = (function(field, class_index) {

    if (class_index == 1) {
        class_s = 'wrong';
    } else if (class_index == 2) {
        class_s = 'correct';
    }

    document.getElementById(field).className = class_s;
    return 1;
});


    }); // end of document ready
})(jQuery); // end of jQuery name space


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

$('.back-to-top, .squiggle').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


    }); // end of document ready
})(jQuery); // end of jQuery name space
/*
 * Basic jQuery Slider plug-in v.1.3
 *
 * http://www.basic-slider.com
 *
 * Authored by John Cobb
 * http://www.johncobb.name
 * @john0514
 *
 * Copyright 2011, John Cobb
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 */

;(function($) {

    "use strict";

    $.fn.carousel = function(o) {
        
        // slider default settings
        var defaults        = {

            // w + h to enforce consistency
            width           : 1200,
            height          : 800,

            // transition valuess
            animtype        : 'slide',   // or slide
            animduration    : 450,      // length of transition
            animspeed       : 3500,     // delay between transitions
            automatic       : true,     // enable/disable automatic slide rotation

            // control and marker configuration
            nexttext        : '<i class="fa fa-chevron-right"></i>',   // text/html inside next UI element
            prevtext        : '<i class="fa fa-chevron-left"></i>',   // text/html inside previous UI element

            // interaction values
            hoverpause      : true,     // enable/disable pause slides on hover

        };

        // create settings from defauls and user options
        var settings        = $.extend({}, defaults, o);

        // slider elements
        var $wrapper        = this,
            $slider         = $wrapper.find('ul.carousel'),
            $slides         = $slider.children('li'),

            // control elements
            $c_wrapper      = null,
            $c_fwd          = null,
            $c_prev         = null,

            // marker elements
            $m_wrapper      = null,
            $m_indicators      = null,

            // elements for slide animation
            $canvas         = null,
            $clone_first    = null,
            $clone_last     = null;

        // state management object
        var state           = {
            slidecount      : $slides.length,   // total number of slides
            animating       : false,            // bool: is transition is progress
            paused          : false,            // bool: is the slider paused
            currentslide    : 1,                // current slide being viewed (not 0 based)
            nextslide       : 0,                // slide to view next (not 0 based)
            currentindex    : 0,                // current slide being viewed (0 based)
            nextindex       : 0,                // slide to view next (0 based)
            interval        : null              // interval for automatic rotation
        };

        var responsive      = {
            width           : null,
            height          : null,
            ratio           : null
        };

        // helpful variables
        var vars            = {
            fwd             : 'forward',
            prev            : 'previous'
        };
            
        // run through options and initialise settings
        var init = function() {

            // differentiate slider li from content li
            $slides.addClass('carousel-slide');

            // conf dimensions, responsive or static
            conf_responsive();

            // configurations only avaliable if more than 1 slide
            if( state.slidecount > 1 ){

                // enable pause on hover
                if (settings.hoverpause && settings.automatic){
                    conf_hoverpause();
                }

                // conf slide animation
                if (settings.animtype === 'slide'){
                    conf_slide();
                }

            } else {
                // Stop automatic animation, because we only have one slide! 
                settings.automatic = false;
            }

            // TODO: need to accomodate random start for slide transition setting
            if(settings.animtype === 'slide'){
                state.currentindex = 1;
                state.currentslide = 2;
            }

            // slide components are hidden by default, show them now
            $slider.show();
            $slides.eq(state.currentindex).show();

            // Finally, if automatic is set to true, kick off the interval
            if(settings.automatic){
                state.interval = setInterval(function () {
                    go(vars.fwd, false);
                }, settings.animspeed);
            }

        };

        var conf_responsive = function() {

            responsive.width    = $wrapper.outerWidth();
            responsive.ratio    = responsive.width/settings.width,
            responsive.height   = settings.height * responsive.ratio;


            if(settings.animtype === 'slide'){

                // initial setup
                $slides.css({
                    'height'        : settings.height,
                    'width'         : settings.width
                });
                $slides.children('img').css({
                    'height'        : settings.height,
                    'width'         : settings.width
                });
                $slider.css({
                    'height'        : settings.height,
                    'width'         : settings.width * settings.slidecount
                });
                $wrapper.css({
                    'height'        : settings.height,
                    'max-width'     : settings.width,
                    'position'      : 'relative'
                });

                if(responsive.width < settings.width){

                    $slides.css({
                        'height'        : responsive.height
                    });
                    $slides.children('img').css({
                        'height'        : responsive.height
                    });
                    $slider.css({
                        'height'        : responsive.height
                    });
                    $wrapper.css({
                        'height'        : responsive.height
                    });

                }

                $(window).on('load resize', function() {

                    // calculate and update dimensions
                    responsive.width    = $wrapper.outerWidth(),
                    responsive.ratio    = responsive.width/settings.width,
                    responsive.height   = settings.height * responsive.ratio;

                    $slides.css({
                        'height'        : responsive.height,
                        'width'         : responsive.width
                    });
                    $slides.children('img').css({
                        'height'        : responsive.height,
                        'width'         : responsive.width
                    });
                    $slider.css({
                        'height'        : responsive.height,
                        'width'         : responsive.width * settings.slidecount
                    });
                    $wrapper.css({
                        'height'        : responsive.height
                    });
                    $canvas.css({
                        'height'        : responsive.height,
                        'width'         : responsive.width
                    });

                    resize_complete(function(){
                        go(false,state.currentslide);
                    }, 200, "some unique string");

                });

            }

        };

        var resize_complete = (function () {
            
            var timers = {};
            
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout (timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };

        })();


/***********************************************
 * Configuration 
 ***********************************************/

/**
 * Define each separate configurations
 */

        var conf_slide = function() {

            // create two extra elements which are clones of the first and last slides
            $clone_first    = $slides.eq(0).clone();
            $clone_last     = $slides.eq(state.slidecount-1).clone();

            // add them to the DOM where we need them
            $clone_first.attr({'data-clone' : 'last', 'data-slide' : 0}).appendTo($slider).show();
            $clone_last.attr({'data-clone' : 'first', 'data-slide' : 0}).prependTo($slider).show();

            // update the elements object
            $slides             = $slider.children('li');
            state.slidecount    = $slides.length;

            // create a 'canvas' element which is neccessary for the slide animation to work
            $canvas = $('.carousel-wrapper');

            // if the slider is responsive && the calculated width is less than the max width
            if(settings.responsive && (responsive.width < settings.width)){

                $canvas.css({
                    'width'     : responsive.width,
                    'height'    : responsive.height,
                    'overflow'  : 'hidden',
                    'position'  : 'relative'
                });

                // update the dimensions to the slider to accomodate all the slides side by side
                $slider.css({
                    'width'     : responsive.width * (state.slidecount + 2),
                    'left'      : -responsive.width * state.currentslide
                });

            }
            else {

                $canvas.css({
                    'width'     : settings.width,
                    'height'    : settings.height,
                    'overflow'  : 'hidden',
                    'position'  : 'relative'
                });

                // update the dimensions to the slider to accomodate all the slides side by side
                $slider.css({
                    'width'     : settings.width * (state.slidecount + 2),
                    'left'      : -settings.width * state.currentslide
                });

            }

            // add some inline styles which will align our slides for left-right sliding
            $slides.css({
                'float'         : 'left',
                'position'      : 'relative',
                'display'       : 'list-item'
            });

            // 'everything.. in it's right place'
            $canvas.prependTo($wrapper);
            $slider.appendTo($canvas);

        };

        var show_controls = (function() {

            // create the elements for the controls
            $c_wrapper  = $('ul.carousel-controls');
            $c_fwd      = $('<li class="carousel-next"><a href="#" data-direction="'+ vars.fwd +'">' + settings.nexttext + '</a></li>');
            $c_prev     = $('<li class="carousel-prev"><a href="#" data-direction="'+ vars.prev +'">' + settings.prevtext + '</a></li>');

            // bind click events
            $c_wrapper.on('click','a',function(e){

                e.preventDefault();
                var direction = $(this).attr('data-direction');

                if(!state.animating){

                    if(direction === vars.fwd){
                        go(vars.fwd,false);
                    }

                    if(direction === vars.prev){
                        go(vars.prev,false);
                    }

                }

            });

            // put 'em all together
            $c_prev.appendTo($c_wrapper);
            $c_fwd.appendTo($c_wrapper);
            $c_wrapper.appendTo($canvas);

        })();

        var show_indicators = (function() {

            // create a wrapper for our indicators
            $m_wrapper = $('ol.carousel-indicators');

            // for every slide, create a marker
            $.each($slides, function(key, slide){

                var slidenum    = key + 1,
                    gotoslide   = key + 1;
                
                if(settings.animtype === 'slide'){
                    // + 2 to account for clones
                    gotoslide = key + 2;
                }

                var marker = $('<li><a href="#"></a></li>');

                // set the first marker to be active
                if(slidenum === state.currentslide){ marker.addClass('active-marker'); }

                // bind the click event
                marker.on('click','a',function(e){
                    e.preventDefault();
                    if(!state.animating && state.currentslide !== gotoslide){
                        go(false,gotoslide);
                    }
                });

                // add the marker to the wrapper
                marker.appendTo($m_wrapper);

            });

            $m_wrapper.appendTo($canvas);
            $m_indicators = $m_wrapper.find('li');
        })();

        var conf_keynav = (function() {

            $(document).keyup(function (event) {

                if (!state.paused) {
                    clearInterval(state.interval);
                    state.paused = true;
                }

                if (!state.animating) {
                    if (event.keyCode === 39) {
                        event.preventDefault();
                        go(vars.fwd, false);
                    } else if (event.keyCode === 37) {
                        event.preventDefault();
                        go(vars.prev, false);
                    }
                }

                if (state.paused && settings.automatic) {
                    state.interval = setInterval(function () {
                        go(vars.fwd);
                    }, settings.animspeed);
                    state.paused = false;
                }

            });

        })();

        var conf_hoverpause = function() {

            $wrapper.hover(function () {
                if (!state.paused) {
                    clearInterval(state.interval);
                    state.paused = true;
                }
            }, function () {
                if (state.paused) {
                    state.interval = setInterval(function () {
                        go(vars.fwd, false);
                    }, settings.animspeed);
                    state.paused = false;
                }
            });

        };

/***********************************************
 * Next slide 
 ***********************************************/

/**
 * Cycle through slides
 */

        var set_next = function(direction) {

            if(direction === vars.fwd){
                
                if($slides.eq(state.currentindex).next().length){
                    state.nextindex = state.currentindex + 1;
                    state.nextslide = state.currentslide + 1;
                }
                else{
                    state.nextindex = 0;
                    state.nextslide = 1;
                }

            }
            else{

                if($slides.eq(state.currentindex).prev().length){
                    state.nextindex = state.currentindex - 1;
                    state.nextslide = state.currentslide - 1;
                }
                else{
                    state.nextindex = state.slidecount - 1;
                    state.nextslide = state.slidecount;
                }

            }

        };


/***********************************************
 * Start 
 ***********************************************/

/**
 * Start animation
 */

        var go = function(direction, position) {

            // only if we're not already doing things
            if(!state.animating){

                // doing things
                state.animating = true;

                if(position){
                    state.nextslide = position;
                    state.nextindex = position-1;
                }
                else{
                    set_next(direction);
                }


                // slide animation
                if(settings.animtype === 'slide'){

                        
                    var markerindex = state.nextindex-1;

                    if(markerindex === state.slidecount-2){
                        markerindex = 0;
                    }
                    else if(markerindex === -1){
                        markerindex = state.slidecount-3;
                    }

                    $m_indicators.removeClass('active-marker');
                    $m_indicators.eq(markerindex).addClass('active-marker');

                    // if the slider is responsive && the calculated width is less than the max width
                    if(settings.responsive && ( responsive.width < settings.width ) ){
                        state.slidewidth = responsive.width;
                    }
                    else{
                        state.slidewidth = settings.width;
                    }

                    $slider.animate({'left': -state.nextindex * state.slidewidth }, settings.animduration, function(){

                        state.currentslide = state.nextslide;
                        state.currentindex = state.nextindex;

                        // is the current slide a clone?
                        if($slides.eq(state.currentindex).attr('data-clone') === 'last'){

                            // affirmative, at the last slide (clone of first)
                            $slider.css({'left': -state.slidewidth });
                            state.currentslide = 2;
                            state.currentindex = 1;

                        }
                        else if($slides.eq(state.currentindex).attr('data-clone') === 'first'){

                            // affirmative, at the fist slide (clone of last)
                            $slider.css({'left': -state.slidewidth *(state.slidecount - 2)});
                            state.currentslide = state.slidecount - 1;
                            state.currentindex = state.slidecount - 2;

                        }

                        state.animating = false;

                    });

                }

            }

        };
        // lets get the party started :)
        init();

    };

})(jQuery);