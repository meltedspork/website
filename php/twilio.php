<?php
require str_replace("php", "", __DIR__ ) . "vendor/autoload.php";

$app = new \Slim\Slim();

function sms($app) {
    // start the session
    if(!isset($_SESSION)) {
        session_start();
    }

    // get the session varible if it exists
    if (isset($_SESSION["counter"])) {
        $counter = $_SESSION["counter"];
    } else {
        $counter = 0;
    }

    // valid function names which will be append with sms{Name}()
    $funcObj = array("Num","Time");
    $funcStr = false;

    $body = $app->request()->params("Body");

    if ($body != "") {
        $temp_body = $body;//explode(",", $body)[0];
        $check_sms_app = ucfirst(strtolower($temp_body));

        foreach($funcObj as $obj) {
            if ($obj == $check_sms_app) {
                $_SESSION["sms_app"] = $check_sms_app;
                $body = str_replace($temp_body . "", ",", $body);
                $funcStr = true;
                break;
            }
        }
    } else {
        $_SESSION["sms_app"] = "Init";
    }

    if (!isset($_SESSION["sms_app"]) || empty($_SESSION["sms_app"]) || $_SESSION["sms_app"] == "Init") {
         $_SESSION["sms_app"] = "Init";
    }
    $sms_app = $_SESSION["sms_app"];

    $timeout = 300; // Number of seconds until it times out.

    // Check if the timeout field exists.
    if(isset($_SESSION["timeout"])) {
    // See if the number of seconds since the last
    // visit is larger than the timeout period.
        $duration = time() - (int)$_SESSION["timeout"];
        if($duration > $timeout) {
            // Destroy the session and restart it.
            session_destroy();
            session_start();
            $counter = 0;
            if(!$funcStr) {
                $sms_app = "Init";
            }
        }
    }

    // Update the timout field with the current time.
    $_SESSION["timeout"] = time();

    // increment it
    $counter++;

    // save it
    $_SESSION["counter"] = $counter;
    $_SESSION["sms_app"] = $sms_app;

    //$reply = $_SESSION["timeout"]." | ".$_SESSION["counter"]." | ".$_SESSION["sms_app"]." | ".$body;
    $reply = "";

    if(is_callable("sms" . $sms_app)) {
        $reply = call_user_func("sms" . $sms_app,$body);
    }

    return "#" . $counter. ": " .$reply;
}

function smsInit($body) {
    return "Send NUM,{number} for triva number: ".$body;//, TIME for current time, TEMP for current weather";
}

function smsNum($number) {

    if (!is_numeric($number) || $number == "" || $number == null) {
        $number = "random";
    }

    $url = "http://numbersapi.com/".$number."/trivia?notfound=ceil&json";

    $response = getCurl($url);

    $reply = $response["text"];

    if ($number == "random") {
        $reply = "Random Number: ".$reply;
    }

    return $reply;
}

function smsTime($location) {
    date_default_timezone_set("America/Chicago");
    return date("m/d/Y h:i:s a", time());
}

$app->get("/twilio/:functionName", function ($functionName) use ($app) {

    if(is_callable($functionName)) {
        $app->response()->header("Content-Type", "application/xml");

        $result = call_user_func($functionName,$app);

        $twilio = new SimpleXMLElement("<Response/>");
        $sms = $twilio->addChild("Sms",$result);

        echo $twilio->asXML();
    }

});

function getCurl($url) {
    //  Initiate curl
    $ch = curl_init();
    // Disable SSL verification
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // Will return the response, if false it print the response
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // Set the url
    curl_setopt($ch, CURLOPT_URL,$url);
    // Execute
    $result=curl_exec($ch);
    // Closing
    curl_close($ch);

    // Will dump a beauty json
    // var_dump(json_decode($result));

    return json_decode($result,true);
}

$app->run();
