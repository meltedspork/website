<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->response()->header("Content-Type", "application/xml");

$app->get('(/(:filepath(/(:functionName(/(:varName(/(:var2Name))))))))', function ($filepath=null,$functionName=null,$varName=null,,$var2Name=null) use ($app) {
	//require __DIR__.'/' . $filepath . '.php';

	$home = new SimpleXMLElement("<Route/>");
	$route = $home->addChild("filepath",$filepath);
	$route = $home->addChild("functionName",$functionName);
	$route = $home->addChild("varName",$varName);
	$route = $home->addChild("var2Name",$var2Name);

	echo $home->asXML();

});

$app->run();