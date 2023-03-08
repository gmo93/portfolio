<?php
// Get data from form 
$name = $_POST['name'];
$message= $_POST['message'];
 
$to = "omohundrogrant@gmail.com";
$subject = "This is the subject line";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Name = ". $name . "\r\n Message =" . $message;
 
$headers = "From: omohundrogrant@gmail.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:last.html");
?>