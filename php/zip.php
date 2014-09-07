<?php
require str_replace("php", "", __DIR__ ) . "vendor/autoload.php";

$app = new \Slim\Slim();

$app->view(new \JsonApiView());
$app->add(new \JsonApiMiddleware());

$app->get("/zip/:zipcode", function ($zipcode) use ($app) {
	$result = new stdClass();

	$zip_db = array(
		"zip"
		,"type"
		,"primary_city"
		,"acceptable_cities"
		,"unacceptable_cities"
		,"state"
		,"county"
		,"timezone"
		,"area_codes"
		,"latitude"
		,"longitude"
		,"world_region"
		,"country"
		,"decommissioned"
		,"estimated_population"
		,"notes"
	);

	// http://www.unitedstateszipcodes.org/zip-code-database/
	if (($handle = fopen("flatfile/zip_code_database.csv", "r")) !== FALSE) {
    	while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    		if ($data[0] == $zipcode) {
    			$num = count($zip_db);
	    		for ($c=0; $c < $num; $c++) {
           			$result->$zip_db[$c] = $data[$c];
        		}
        		break;
	    	}
    	}
    	fclose($handle);
	}

    $app->render(200,array(
    	"zipcode" => $zipcode,
    	"results" => $result,
    	"source" => "http://www.unitedstateszipcodes.org/zip-code-database/",
	));
});

$app->run();