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