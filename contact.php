<?php
$name = $_POST['name'];
$email= $_POST['email'];
$request= $_POST['request'];
 
$to = "chernysn@gmail.com";
$subject = "FROM WEB DEV PAGE";
 
$txt ="Name = ". $name . "\r\n  Email = "
    . $email . "\r\n Request =" . $request;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
header("Location:index.html");
?>