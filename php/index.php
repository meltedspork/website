<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

$app->get('/moon/:name', function ($name) {
    echo "Moon: $name";
});

$app->run();