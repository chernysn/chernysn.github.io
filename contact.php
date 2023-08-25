<?php
$name = $_POST['name'];
$email= $_POST['email'];
$request= $_POST['request'];
 
$to = "natasha.e.chernysheva@gmail.com";
$subject = "from your web dev site";
 
$txt ="Name = ". $name . "\r\n  Email = "
    . $email . "\r\n Request =" . $request;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
header("Location:index.html");
?>