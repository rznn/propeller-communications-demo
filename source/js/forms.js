

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