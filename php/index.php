<?php
require '/var/www/website-nodejs/vendor/autoload.php';

$app = new \Slim\Slim();

/*
$app->get('/sms/', function () {
    require 'twilio/sms.php';
});
*/

$app->get('/moon/', function () {
	date_default_timezone_set("America/Chicago");
    require 'moon.php';
});


$app->run();