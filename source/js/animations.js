
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