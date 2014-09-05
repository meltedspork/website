<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header("Content-Type", "application/xml");

$app->get('/:filepath/:functionName', function ($filepath,$functionName) use ($app) {
	$home = new SimpleXMLElement("<Route/>");
    $route = $home->addChild("filepath",$filepath);
    $route = $home->addChild("functionName",$functionName);
	echo $home->asXML();

	//require __DIR__.'/' . $filepath . '.php';
});

$app->run();