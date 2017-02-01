<?php
$subject = "Сообщение с сайта iGENERAL-MEDIA"; //Subject:
$from_name = "Заявка"; //From:
$from_email = "info@igeneral-media.ru"; //From:
$tosend = "1@pyatko.ru";

$name = isset($_POST['uname'])?$_POST['uname']:$from_name;
$phone = $_POST['tel'];
$text = $_POST['text'];
$email = isset($_POST['email'])?$_POST['email']:$from_email;
$tax = $_POST['tax'];
$formname = $_POST['title'];
$page = $_POST['url'];

$msg  = "<p><strong>".$subject."</strong></p>\r\n";
$msg .= "<table border='2' cellpadding='10'><tr><td><p><strong>С какой страницы:</strong></td><td><a href='".$page."'>".$page."</a></td></tr>\r\n";
$msg .= "<tr><td><p><strong>Из какой формы:</strong></td><td> ".$formname."</p></td></tr>\r\n";

if ($phone != '-' && !empty($phone)) {
	$msg .= "<tr><td><p><strong>Телефон:</strong></td><td> ".$phone."</p></td></tr>\r\n";
}

if ($email != '-' && !empty($email) && isset($_POST['email'])) {
	$msg .= "<tr><td><p><strong>E-mail:</strong></td><td> ".$email."</p></td></tr>\r\n";
}

if ($name != '-' && !empty($name) && isset($_POST['uname'])) {
	$msg .= "<tr><td><p><strong>Имя:</strong></td><td> ".$name."</p></td></tr>\r\n";
}

if ($tax != '-' && !empty($tax) && isset($_POST['tax'])) {
	$msg .= "<tr><td><p><strong>Тариф:</strong></td><td> ".$tax."</p></td></tr>\r\n";
}

if ($text != '-' && !empty($text)) {
	$msg .= "<tr><td><p><strong>Сообщение:</strong></td><td> ".$text."</p></td></tr>\r\n";
}

$msg .= "</table>";

$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
$headers .= "From: ".$name." <".$email.">\r\n";

if(mail($tosend, $subject, $msg, $headers)) {
	echo json_encode(array('result' => true));
} else {
	echo json_encode(array('result' => false));
}

?>