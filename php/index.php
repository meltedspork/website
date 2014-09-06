<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header("Content-Type", "application/xml");

$app->get('(/(:filepath(/(:functionName(/(:varName))))))', function ($filepath=null,$functionName=null,$varName=null) use ($app) {
	require __DIR__.'/' . $filepath . '.php';
	/*
	$home = new SimpleXMLElement("<Route/>");
	$route = $home->addChild("filepath",$filepath);
	$route = $home->addChild("functionName",$functionName);
	$route = $home->addChild("varName",$varName);

	echo $home->asXML();
	*/

	//require __DIR__.'/' . $filepath . '.php';
});

$app->run();