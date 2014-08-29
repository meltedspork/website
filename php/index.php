<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();

/*
$app->get('/sms/', function () {
    require 'sms.php';
});


$app->get('/moon/', function () {
	date_default_timezone_set("America/Chicago");
    require 'moon.php';
});
*/

$app->run();