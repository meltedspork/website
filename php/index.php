<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/:name', function ($name) {
   echo "Hello $name";
});

$app->get('/:filepath/:functionName', function ($filepath,$functionName) use ($app) {
	require __DIR__.'/' . $filepath . '.php';
	echo "functionName: ".$functionName;
});

$app->run();