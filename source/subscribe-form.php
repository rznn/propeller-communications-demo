<?php

    if(!isset($_POST['submit'])) {
        //This page should not be accessed directly. Need to submit the form.
        echo "error; you need to submit the form!";
    }


    /*
    ** Receive notification of new subscriber 
    */

    /* Subscriber details */
    $subName = $_POST['name'];
    $subEmail = $_POST['email'];
    $subBirthDay = $_POST['day'];
    $subBirthMonth = $_POST['month'];

    /* Email template */

    // The form has been tested and it works, even though the messages
    // end up in the spam bin due to the limited and generic content.
    //
    // Our own e-mail address
    // Test email by changing this to your email address.
    $to = "myemail@domain.com";
    $from = "$subName";
    $subject = "Newsletter test";
    $message = "This is only a test.\n\n";
    $message .= "Subscriber name: $subName\n";
    $message .= "Subscriber e-mail: $subEmail\n";
    $message .= "Subscriber birthday: $subBirthDay/$subBirthMonth\n\n";
    $message .= "Yey, congrats on your new subscriber!\n";
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $subEmail ($subName)\r\n";
    $headers .= "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-Type: text/html; charset=utf-8\r\n"; 
    $headers .= "X-Priority: 1\r\n"; 


    // Send the email
    mail($to, $subject, $message, $headers);

    // Redirect to thank-you page
    header('Location: thank-you.html');


    /*
    ** Send e-mail to confirm subscription 
    */

    // In the works ...
?>