<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'geetakolte1239@gmail.com'; // Replace with Gmail
        $mail->Password = 'uoczilwytbirqffu';   // Use App Password (Not normal password)
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender & recipient
        $mail->setFrom('yourgmail@gmail.com', 'Kolte Investments');
        $mail->addAddress('geetakolte1239@gmail.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Contact Form: $subject";
        $mail->Body = "
            <h2>New Enquiry/Feedback</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();
        echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'); window.location.href='contact.html';</script>";
    }
}
