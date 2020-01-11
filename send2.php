<?php

$cUserName = $_POST['cUserName'];
$cUserPhone = $_POST['cUserPhone'];

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mymail = new PHPMailer\PHPMailer\PHPMailer();


try {
    //Server settings
    $mymail->SMTPDebug = 0;                      // Enable verbose debug output
    $mymail->isSMTP();                                            // Send using SMTP
    $mymail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mymail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mymail->Username   = 'evgdev.acc@gmail.com';                     // SMTP username
    $mymail->Password   = 'czHN32G9';                               // SMTP password
    $mymail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mymail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mymail->setFrom('evgdev.acc@gmail.com', 'Evgeny');
    $mymail->addAddress('gcause17@gmail.com');     // Add a recipient

     // Content
	 $mymail->CharSet = "UTF-8";
     $mymail->isHTML(true);                                  // Set email format to HTML
     $mymail->Subject = 'Новая заявка с сайта';
     $mymail->Body    = "Пользователь оставил данные из формы Онлайн-контроль. <br>
    Имя пользователя: ${cUserName}, <br>Телефон: ${cUserPhone}";

     $mymail->send();
     header('Location: thanks.html');
} catch (Exception $e) {
    echo "Заявку не удалось отправить. Ошибка Mailer: {$mymail->ErrorInfo}";
}

?>