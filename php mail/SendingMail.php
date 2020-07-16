<?php

require ('PHPMailerAutoload.php');
require ('class.phpmailer.php');

$mail = new PhpMailer();

$mail -> SMTPDebug = 2;
$mail -> SMTPAuth = true;
$mail -> SMTPSecure = 'tls';
$mail -> Host = 'smtp@gmail.com';
$mail -> Port = 587;
$mail -> Username = 'sonu@gradlic.com.com';
$mail -> Password = 'Asshole@123';

// $mail -> isSMTP();
// $mail -> getSMTPInstance();
$mail -> setFrom('sonu@gradlic.com');
$mail -> addAddress('sonusahcoc31@gmail.com');
$mail -> addReplyTo('sonu@gradlic.com');
$mail -> isHTML(true);


$mail -> Subject = 'PHP MAILER';
$mail -> Body = "<h1 style='text-align:center;'>HTML Content</h1><br><h4 style='text-align:center;color:purple'>I have successfuly learn how to mail</h4>";

if(!$mail -> send()){
    echo "Error while sending mail";
}
else{
    echo "Mail sent successfuly";
}

?>