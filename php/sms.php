<?php
require str_replace('php', '', __DIR__ ) . 'vendor/autoload.php';

$app = new \Slim\Slim();

    // start the session
    session_start();

    // get the session varible if it exists
    $counter = $_SESSION['counter'];

    // if it doesnt, set the default
    if(!strlen($counter)) {
        $counter = 0;
    }

    $timeout = 300; // Number of seconds until it times out.

    // Check if the timeout field exists.
    if(isset($_SESSION['timeout'])) {
    // See if the number of seconds since the last
    // visit is larger than the timeout period.
        $duration = time() - (int)$_SESSION['timeout'];
        if($duration > $timeout) {
            // Destroy the session and restart it.
            session_destroy();
            session_start();
            $counter = 0;
        }
    }

    // Update the timout field with the current time.
    $_SESSION['timeout'] = time();

     // increment it
    $counter++;

    // save it
    $_SESSION['counter'] = $counter;

function numberSms($app) {


    $reply = '';

    if($counter > 1) {
        $number = $reply = $app->request()->params('Body');

        if (!is_numeric($number) || $number == '' || $number == null) {
            $number = 'random';
        }
        $reply = $number;

       $url = 'http://numbersapi.com/'.$number.'/trivia?notfound=ceil&json';

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

        // Will dump a beauty json :3
        // var_dump(json_decode($result));
        $response = json_decode($result,true);
        $reply = $response['text'];

        if ($number == 'random') {
            $reply = 'Random Number: '.$reply;
        }

    } else {
        $reply = 'Trivia time! Pls, reply back w number.';
    }
    return $reply;
}

$app = new \Slim\Slim();

$app->get("/sms/:functionName", function ($functionName) use ($app) {
    $app->response()->header("Content-Type", "application/xml");

    if(is_callable($functionName)) {
        $result = call_user_func($functionName,$app);

        $twilio = new SimpleXMLElement("<Response/>");
        $sms = $twilio->addChild("Sms",$result);

        echo $twilio->asXML();
    }

});

$app->run();
