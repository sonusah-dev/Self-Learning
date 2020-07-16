<?php
// mailing address of reciever 
$to = "v.ray96610@gmail.com";
// subject of the mail
$subject = "Testing";
// message to be send via email
$message = "Hello from php mail";
// header 
$headers = "From: sonusah786786@gmail.com.com" . "\r\n";

$sent = mail($to, $subject, $message, $headers);
if(!$sent){
    echo "Failed to send email";
}
else{
    echo "Email sent successfully";
}

?>