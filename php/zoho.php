<?php
require_once str_replace("php", "", __DIR__ ) . "vendor/msconfig-php/settings.php";
require str_replace("php", "", __DIR__ ) . "vendor/autoload.php";

$app = new \Slim\Slim();

$app->view(new \JsonApiView());
$app->add(new \JsonApiMiddleware());

function insertRecords($app, $moduleName) {
	date_default_timezone_set ("America/Chicago") ;

	$timeTag = date("Y/m/d G:i:s");

	$zoho = new SimpleXMLElement("<{$moduleName}/>");
	$row = $zoho->addChild("row");
	$row->addAttribute("no", "1");

	$req = $app->request()->params();
    foreach($req as $key=>$obj) {
		$fl = $row->addChild("FL",$req[$key]);
		$fl->addAttribute("val", $key);
	}

	$xmlData = $zoho->asXML();

	return getCurl($moduleName,"insertRecords",$xmlData,"json");
}


$app->post("/zoho(/(:methodName(/(:moduleName(/(:recordId))))))", function ($methodName = null, $moduleName = null, $recordId = null) use ($app) {
	callZoho($app, $methodName, $moduleName, $recordId);
});

$app->get("/zoho(/(:methodName(/(:moduleName(/(:recordId))))))", function ($methodName = null, $moduleName = null, $recordId = null) use ($app) {
	callZoho($app, $methodName, $moduleName, $recordId);
});


function callZoho($app, $methodName, $moduleName, $recordId) {
/*
	if ($methodName == null) {
		throw new Exception("missing method router");
	} else if ($moduleName == null) {
		try {
			$result = call_user_func($methodName);
		} catch(Exception $e) {
			throw new Exception("missing module router");
		}
	} else if (is_callable($methodName)) {
        //date_default_timezone_set("America/Chicago");
	    $result = $call_user_func($methodName, $app, $moduleName);
	} else {
    	$result = getCurl($methodName,$moduleName,null,$recordId);
    }*/
$result = $methodName;//
	$response = $app->response();
	$response->header("Access-Control-Allow-Origin", "*");
	$app->render(200,array(
		"zoho" => $result,
	));
}

// show all methods available  from zoho
// can be accessed [path]/showmethods
function showMethods() {
	return array(
		array("getMyRecords","To retrieve data by the owner of the Authentication Token specified in the API request")
		,array("getRecords","To retrieve all users data specified in the API request")
		,array("getRecordById","To retrieve individual records by record ID")
		,array("getCVRecords","To retrieve data with respect to the Custom View in Zoho CRM")
		,array("insertRecords","To insert records into the required Zoho CRM module")
		,array("updateRecords","To update or modify the records in Zoho CRM")
		,array("getSearchRecords","To search records by regular expressions of selected columns")
		,array("getSearchRecordsByPDC","To search the values based on pre-defined columns")
		,array("deleteRecords","To delete the selected records")
		,array("convertLead","To convert lead to potential, account and contact")
		,array("getRelatedRecords","To retrieve records related to a primary module")
		,array("getFields","To retrieve details of fields available in a module")
		,array("updateRelatedRecords","To update records related to another record")
		,array("getUsers","To retrieve the list of users in your organization")
		,array("uploadFile","To attach a file to a record")
		,array("downloadFile","To download a file attached to a record")
		,array("deleteFile","To delete a file attached to a record")
		,array("uploadPhoto","To add a photo to a contact or lead")
		,array("downloadPhoto","To download the photo of a contact or lead")
		,array("deletePhoto","To delete a photo of a contact or lead")
		,array("getModules","To retrieve all modules from Zoho CRM account")
		,array("getDeletedRecordIds","To retrieve the unique IDs of deleted records from recycle bin")
	);
}

// show all modules available  from zoho
// can be accessed [path]/showmodules
function showModules() {
	return array(
		array("Leads","Leads")
		,array("Accounts","Accounts")
		,array("Contacts","Contacts")
		,array("Potentials","Potentials")
		,array("Campaigns","Campaigns")
		,array("Cases","Cases")
		,array("Solutions","Soultions")
		,array("Products","Products")
		,array("Price Books","PriceBooks")
		,array("Quotes","Quotes")
		,array("Invoices","Invoices")
		,array("Sales Orders","SalesOrders")
		,array("Vendors","Vendors")
		,array("Purchase Orders","PurchaseOrders")
		,array("Events","Events")
		,array("Tasks","Tasks")
		,array("Calls","Calls")
	);
}

function getCurl($method,$module,$xmlData,$record = null,$format = "json") {
	$authtoken = $GLOBALS['ztoken'];

	$url = "https://crm.zoho.com/crm/private/json/{$module}/{$method}?";
	$cdr = "newFormat=2&authtoken={$authtoken}&scope=crmapi&xmlData={$xmlData}&id={$record}";

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_VERBOSE, 1);//standard i/o streams
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);// Turn off the server and peer verification 
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//Set to return data to string ($response)

	if ($xmlData != null) {
		curl_setopt($ch, CURLOPT_POST, 1);//Regular post
	}

	//add the CDR to be posted
	curl_setopt($ch, CURLOPT_POSTFIELDS, $cdr);

	//execute cURL
	$response = curl_exec($ch);
	$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	$http_error = curl_error($ch);
	curl_close($ch);

	if ($http_status == 200) {
		$response = json_decode($response);
	} else {
		$response = json_decode($http_error);
	}

	return $response;
}

$app->run();