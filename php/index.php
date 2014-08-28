<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();

date_default_timezone_set("America/Chicago");

require 'moon.php';

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});


$app->run();