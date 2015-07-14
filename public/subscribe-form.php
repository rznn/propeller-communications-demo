<?php

if(!isset($_POST['submit']))
{
  //This page should not be accessed directly. Need to submit the form.
  echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$email = $_POST['email'];


$email_from = 'rznart@gmail.com';//<== update the email address
$email_subject = "Submission form test";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n $message".
    
$to = "rznart@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');

?>