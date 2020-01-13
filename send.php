<?php

$userName = $_POST['userName'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'evgdev.acc@gmail.com';                     // SMTP username
    $mail->Password   = 'czHN32G9';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('evgdev.acc@gmail.com', 'Evgeny');
    $mail->addAddress('gcause17@gmail.com');     // Add a recipient

     // Content
	 $mail->CharSet = "UTF-8";
     $mail->isHTML(true);                                  // Set email format to HTML
     $mail->Subject = 'Новая заявка с сайта';
     $mail->Body    = "Пользователь оставил данные. <br>
     Имя пользователя: ${userName}, <br>Телефон: ${userPhone}, <br>Почта: ${userEmail}";

     if ($mail->send()) {
         echo "ok";
     }
     else {
         echo "Заявку не удалось отправить. Ошибка Mailer: {$mail->ErrorInfo}";
     }
} catch (Exception $e) {
    echo "Заявку не удалось отправить. Ошибка Mailer: {$mail->ErrorInfo}";
}


?>