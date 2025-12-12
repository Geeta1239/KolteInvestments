<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // SMTP config (optional: you can use mail() instead)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // use your SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'kolteinvestments@gmail.com'; // your email
        $mail->Password = 'uoczilwytbirqffu'; // your app password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender & Recipient
        $mail->setFrom('kolteinvestments@gmail.com', 'Kolte Investments');
        $mail->addAddress('kolteinvestments@gmail.com');

        // Collect form data
        $name       = $_POST["name"];
        $email      = $_POST["email"];
        $phone      = $_POST["phone"];
        $dob        = $_POST["dob"];
        $gender     = $_POST["gender"];
        $consult    = $_POST["consultation_type"];
        $datetime   = $_POST["preferred_datetime"];
        $message    = $_POST["message"];

        // Subject & Body
        $mail->Subject = "New Consultation Booking - $name";
        $mail->isHTML(true);
        $mail->Body = "
            <h3>New Consultation Form</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>DOB:</strong> $dob</p>
            <p><strong>Gender:</strong> $gender</p>
            <p><strong>Consultation Type:</strong> $consult</p>
            <p><strong>Preferred Date/Time:</strong> $datetime</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        // Attach image
        if (isset($_FILES["photo"]) && $_FILES["photo"]["error"] == 0) {
            $mail->addAttachment($_FILES["photo"]["tmp_name"], $_FILES["photo"]["name"]);
        }

        $mail->send();
        header("Location: thankyou.html");
    } catch (Exception $e) {
        echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
