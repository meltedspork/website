<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header("Content-Type", "application/xml");

$app->get('/:filepath/:functionName/:name', function ($filepath,$functionName,$name) use ($app) {
	require __DIR__.'/' . $filepath . '.php';
});

$app->run();