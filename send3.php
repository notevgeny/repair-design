<?php

$fUserName = $_POST['fUserName'];
$fUserPhone = $_POST['fUserPhone'];
$fUserQuestion = $_POST['fUserQuestion'];

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$onmymail = new PHPMailer\PHPMailer\PHPMailer();


try {
    //Server settings
    $onmymail->SMTPDebug = 0;                      // Enable verbose debug output
    $onmymail->isSMTP();                                            // Send using SMTP
    $onmymail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $onmymail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $onmymail->Username   = 'evgdev.acc@gmail.com';                     // SMTP username
    $onmymail->Password   = 'czHN32G9';                               // SMTP password
    $onmymail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $onmymail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $onmymail->setFrom('evgdev.acc@gmail.com', 'Evgeny');
    $onmymail->addAddress('gcause17@gmail.com');     // Add a recipient

     // Content
	 $onmymail->CharSet = "UTF-8";
     $onmymail->isHTML(true);                                  // Set email format to HTML
     $onmymail->Subject = 'Новая заявка с сайта';
     $onmymail->Body    = "Пользователь оставил данные из формы Подвала. <br>
	Имя пользователя: ${fUserName}, <br>Телефон: ${fUserPhone}, <br> Сообщение: ${fUserQuestion}";

     $onmymail->send();
     header('Location: thanks.html');
} catch (Exception $e) {
    echo "Заявку не удалось отправить. Ошибка Mailer: {$onmymail->ErrorInfo}";
}

?>