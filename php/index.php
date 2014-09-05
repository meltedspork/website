<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header("Content-Type", "application/xml");

$app->get('/:filepath/:functionName', function ($filepath,$functionName) use ($app) {
	echo 'filepath: '.$filepath;
	//require __DIR__.'/' . $filepath . '.php';
});

$app->run();