<?php
require_once str_replace("php", "", __DIR__ ) . "vendor/msconfig-php/settings.php";

//get Zoho data
$first = $_POST["FirstName"] ;
$last = $_POST["LastName"];
$phone = $_POST["Phone"];
$mobile = $_POST["Mobile"];
$action = $_REQUEST["Action"];


//if ($action == "newlead"){
// add contact to SendHub
    $SendHubKey = $GLOBALS['shtoken'];
    $SendHubUser = $GLOBALS['shphone'];
//prefer mobile number if available
    if ($mobile != ""){
        $data = array("name" => "$first $last - mobile", "number" => "$mobile");
    }
    else {
        if ($phone != ""){
           $data = array("name" => "$first $last - work", "number" => "$phone");
        }
    }

    $data_string = json_encode($data);

    $qry = "?username={$SendHubUser}&api_key={$SendHubKey}";

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.sendhub.com/v1/contacts/'. $qry);
    curl_setopt($ch, CURLOPT_HTTPPOST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

    $result = curl_exec($ch);
    curl_close($ch);
    echo $result;
//}

?>