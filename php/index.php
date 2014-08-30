<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';
//echo str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();


$app->get('/sms/', function () {
    require 'sms.php';
});


$app->get('/moon/', function () {
	date_default_timezone_set("America/Chicago");
    require __DIR__.'/moon.php';
});


$app->run();