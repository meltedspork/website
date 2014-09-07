<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header("Content-Type", "application/xml");

$app->get('(/(:filepath(/(:functionName(/(:firstVar(/(:secondVar))))))))', function ($filepath=null,$functionName=null,$firstVar=null,$secondVar=null) use ($app) {
	require __DIR__.'/' . $filepath . '.php';
/*
	$home = new SimpleXMLElement("<Route/>");
	$route = $home->addChild("filepath",$filepath);
	$route = $home->addChild("functionName",$functionName);
	$route = $home->addChild("firstVar",$firstVar);
	$route = $home->addChild("secondVar",$secondVar);

	echo $home->asXML();
*/

});

$app->post('(/(:filepath(/(:functionName(/(:firstVar(/(:secondVar))))))))', function ($filepath=null,$functionName=null,$firstVar=null,$secondVar=null) use ($app) {
	require __DIR__.'/' . $filepath . '.php';
});

$app->run();