<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();

//require 'moon.php';

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});


$app->run();