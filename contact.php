
<?php
if(isset($_POST['submit'])){
    $to = "ryan.schlachter89@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "Form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];


    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);

    echo "Mail Sent. Thank you " . $name . ", I will contact you shortly.";
    }

?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
  <title>ThankYou</title>
  <link rel="stylesheet" type="text/css" href="reset.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta http-equiv="refresh" content="3;url=http://www.ryanschlachter.com/" />
</head>
<body class="contact-body">
  <h1>Redirecting in 3 seconds...</h1>
</body>
</html>
