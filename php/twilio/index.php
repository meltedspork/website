<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();
/*
$app->get('/sms/', function () {
   // require 'sms.php';
    echo echo $path_parts['dirname'];
});*/

$app->run();