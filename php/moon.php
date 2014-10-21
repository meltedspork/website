<?php
require str_replace("php", "", __DIR__ ) . "vendor/autoload.php";

$app = new \Slim\Slim();

$app->view(new \JsonApiView());
$app->add(new \JsonApiMiddleware());



$app->response()->header("Content-Type", "application/json;charset=utf-8");

/*
* Adaptation en php du fameux et excellent scripte Astro-MoonPhase de Brett Hamilton écrit en Perl.
* http://search.cpan.org/~brett/Astro-MoonPhase-0.60/
*
Ce Scripte vous permettra de connaître, à une date donnée, l"illumination de la Lune, son age, 
sa distance en km par rapport à la Terre, son angle en degrés, sa distance par rapport au soleil, 
et son angle par rapport au soleil.
*
* FOUND at http://stackoverflow.com/questions/9318328/lunar-phase-api
*
* Adapted as api to return JSON object
*/
class Moon
     {
     function phase($Year, $Month, $Day, $Hour, $Minutes, $Seconds)
         {
         $DateSec = mktime($Hour, $Minutes, $Seconds, $Month, $Day, $Year, 0);

         ini_set("precision", "20");   //Defini la precision des calcules

         # Astronomical constants.
         $Epoch                  = 2444238.5;        # 1980 January 0.0

         # Constants defining the Sun"s apparent orbit.
         $Elonge                 = 278.833540;       # ecliptic longitude of the Sun at epoch 1980.0
         $Elongp                 = 282.596403;       # ecliptic longitude of the Sun at perigee
         $Eccent                 = 0.016718;         # eccentricity of Earth"s orbit
         $Sunsmax                = 1.495985e8;       # semi-major axis of Earth"s orbit, km
         $Sunangsiz              = 0.533128;         # sun"s angular size, degrees, at semi-major axis distance

         # Elements of the Moon"s orbit, epoch 1980.0.
         $Mmlong   				 = 64.975464;        # moon"s mean longitude at the epoch
         $Mmlongp                = 349.383063;       # mean longitude of the perigee at the epoch
         $Mlnode                 = 151.950429;       # mean longitude of the node at the epoch
         $Minc                   = 5.145396;         # inclination of the Moon"s orbit
         $Mecc                   = 0.054900;         # eccentricity of the Moon"s orbit
         $Mangsiz                = 0.5181;           # moon"s angular size at distance a from Earth
         $Msmax                  = 384401.0;         # semi-major axis of Moon"s orbit in km
         $Mparallax              = 0.9507;           # parallax at distance a from Earth
         $Synmonth               = 29.53058868;      # synodic month (new Moon to new Moon)

         $pdate = Moon::jtime($DateSec);

         $pphase;                # illuminated fraction
         $mage;                  # age of moon in days
         $dist;                  # distance in kilometres
         $angdia;                # angular diameter in degrees
         $sudist;                # distance to Sun
         $suangdia;              # sun"s angular diameter


         # Calculation of the Sun"s position.

         $Day = $pdate - $Epoch;                                     # date within epoch
         $N = Moon::fixangle((360 / 365.2422) * $Day);               # mean anomaly of the Sun
         $M = Moon::fixangle($N + $Elonge - $Elongp);                # convert from perigee
                                         # co-ordinates to epoch 1980.0
         $Ec = Moon::kepler($M, $Eccent);                            # solve equation of Kepler
         $Ec = sqrt((1 + $Eccent) / (1 - $Eccent)) * tan($Ec / 2);
         $Ec = 2 * Moon::todeg(atan($Ec));                           # true anomaly
         $Lambdasun = Moon::fixangle($Ec + $Elongp);                 # Sun"s geocentric ecliptic
                                         # longitude
         # Orbital distance factor.
         $F = ((1 + $Eccent * cos(Moon::torad($Ec))) / (1 - $Eccent * $Eccent));
         $SunDist = $Sunsmax / $F;                                   # distance to Sun in km
         $SunAng = $F * $Sunangsiz;                                  # Sun"s angular size in degrees


         # Calculation of the Moon"s position.

         # Moon"s mean longitude.
         $ml = Moon::fixangle(13.1763966 * $Day + $Mmlong);

         # Moon"s mean anomaly.
         $MM = Moon::fixangle($ml - 0.1114041 * $Day - $Mmlongp);

         # Moon"s ascending node mean longitude.
         $MN = Moon::fixangle($Mlnode - 0.0529539 * $Day);

         # Evection.
         $Ev = 1.2739 * sin(Moon::torad(2 * ($ml - $Lambdasun) - $MM));

         # Annual equation.
         $Ae = 0.1858 * sin(Moon::torad($M));

         # Correction term.
         $A3 = 0.37 * sin(Moon::torad($M));

         # Corrected anomaly.
         $MmP = $MM + $Ev - $Ae - $A3;

         # Correction for the equation of the centre.
         $mEc = 6.2886 * sin(Moon::torad($MmP));

         # Another correction term.
         $A4 = 0.214 * sin(Moon::torad(2 * $MmP));

         # Corrected longitude.
         $lP = $ml + $Ev + $mEc - $Ae + $A4;

         # Variation.
         $V = 0.6583 * sin(Moon::torad(2 * ($lP - $Lambdasun)));

         # True longitude.
         $lPP = $lP + $V;

         # Corrected longitude of the node.
         $NP = $MN - 0.16 * sin(Moon::torad($M));

         # Y inclination coordinate.
         $y = sin(Moon::torad($lPP - $NP)) * cos(Moon::torad($Minc));

         # X inclination coordinate.
         $x = cos(Moon::torad($lPP - $NP));

         # Ecliptic longitude.
         $Lambdamoon = Moon::todeg(atan2($y, $x));
         $Lambdamoon += $NP;

         # Ecliptic latitude.
         $BetaM = Moon::todeg(asin(sin(Moon::torad($lPP - $NP)) * sin(Moon::torad($Minc))));

         # Calculation of the phase of the Moon.

         # Age of the Moon in degrees.
         $MoonAge = $lPP - $Lambdasun;

         # Phase of the Moon.
         $MoonPhase = (1 - cos(Moon::torad($MoonAge))) / 2;

         # Calculate distance of moon from the centre of the Earth.

         $MoonDist = ($Msmax * (1 - $Mecc * $Mecc)) /
             (1 + $Mecc * cos(Moon::torad($MmP + $mEc)));

         # Calculate Moon"s angular diameter.

         $MoonDFrac = $MoonDist / $Msmax;
         $MoonAng = $Mangsiz / $MoonDFrac;

         # Calculate Moon"s parallax.

         $MoonPar = $Mparallax / $MoonDFrac;

         $pphase = $MoonPhase;                                   # illuminated fraction
         $mage = $Synmonth * (Moon::fixangle($MoonAge) / 360.0); # age of moon in days
         $dist = $MoonDist;                                      # distance in kilometres
         $angdia = $MoonAng;                                     # angular diameter in degrees
         $sudist = $SunDist;                                     # distance to Sun
         $suangdia = $SunAng;                                    # sun"s angular diameter
         $mpfrac = Moon::fixangle($MoonAge) / 360.0;
         return array( $pphase, $mage, $dist, $angdia, $sudist, $suangdia, $mpfrac, $mpfrac );
         }

     function fixangle($x) { return ($x - 360.0 * (floor($x / 360.0))); }  # fix angle
     function torad($x) { return ($x * (M_PI / 180.0)); }       # deg->rad
     function todeg($x) { return ($x * (180.0 / M_PI)); }       # rad->deg

     function jtime($t)
         {
         $julian = ($t / 86400) + 2440587.5;     # (seconds /(seconds per day)) + julian date of epoch       2440587.5 / 86400 = 28,24753472222 Days
         return ($julian);
         }

     function kepler($m, $ecc)
         {
         $EPSILON = 1e-6;

         $m = Moon::torad($m);
         $e = $m;
         $delta = $e - $ecc * sin($e) - $m;
         while (abs($delta) > $EPSILON)
             {
             $delta = $e - $ecc * sin($e) - $m;
             $e -= $delta / (1 - $ecc * cos($e));
             }
         return ($e);
         }

     }

/*
//Exemple d"utilisation :
//Pour le 11 Avril 2009 à 00h00
list($MoonPhase, $MoonAge, $MoonDist, $MoonAng, $SunDist, $SunAng, $mpfrac) = Moon::phase(2011, 08, 24, 00, 00, 01);
echo "The Moon is illuminated ".number_format($MoonPhase*100, 2, ",", "")."%"."<br>";
echo "Moon age is  ".number_format($MoonAge, 0, ",", "")." days"."<br>";
echo "And it lies at a distance of  ".number_format($MoonDist, 0, ",", "")." km over at Earth."."<br>";
*/

//list($MoonPhase, $MoonAge, $MoonDist, $MoonAng, $SunDist, $SunAng, $mpfrac) = Moon::phase(2011, 08, 24, 00, 00, 01);


function lunarPhase() {
    $now = new DateTime();

    $dateObj = array("Y","m","d","H","i","s");
    $nowObj = array();

    foreach($dateObj as $obj) {
        array_push($nowObj,date_format($now, $obj));
    }

    list($MoonPhase, $MoonAge, $MoonDist, $MoonAng, $SunDist, $SunAng, $mpfrac) = Moon::phase($nowObj[0], $nowObj[1], $nowObj[2], $nowObj[3], $nowObj[4], $nowObj[5]);
    $MoonAge = number_format($MoonAge, 2, ".", "");
    $MoonPhase = number_format($MoonPhase*100, 2, ".", "");
    //echo "MoonPhase: $MoonPhase<br/>";
    //echo "MoonAge: $MoonAge<br>";

    $moon = new stdClass();
    $moon->illuminated = (float)$MoonPhase;
    $moon->age = (float)$MoonAge;

    if($MoonPhase < 1 && $MoonAge < 1) {
	   // echo "New Moon";
	   $moon->phase_code = 10;
	   $moon->phase_name = "New Moon";
    }
    else if($MoonPhase < 3) {
    	if($MoonAge < 14.25) {
    		// echo "Young Moon";
    		$moon->phase_code = 15;
    		$moon->phase_name = "Young Moon";
    	} else {
    		// echo "Old Moon";
    		$moon->phase_code = 85;
    		$moon->phase_name = "Old Moon";
    	}
    }
    else if($MoonPhase < 40) {
    	if($MoonAge < 14.25) {
    		// echo "Waxing Crescent";
    		$moon->phase_code = 20;
    		$moon->phase_name = "Waxing Crescent";
    	} else {
    		// echo "Waning Crescent";
    		$moon->phase_code = 80;
    		$moon->phase_name = "Waning Crescent";
    	}
    }
    else if($MoonPhase < 60) {
    	if($MoonAge < 14.25) {
    		// echo "First Quarter";
    		$moon->phase_code = 30;
    		$moon->phase_name = "First Quarter";
    	} else {
    		// echo "Last Quarter";
    		$moon->phase_code = 70;
    		$moon->phase_name = "Last Quarter";
    	}
    }
    else if($MoonPhase < 98.95) {
    	if($MoonAge < 14.25) {
    		// echo "Waxing Gibbous";
    		$moon->phase_code = 40;
    		$moon->phase_name = "Waxing Gibbous";
    	} else {
    		// echo "Waning Gibbous";
    		$moon->phase_code = 60;
    		$moon->phase_name = "Waning Gibbous";
    	}
    } else {
    	// echo "Full Moon";
    	$moon->phase_code = 50;
    	$moon->phase_name = "Full Moon";
    }

    $response = new stdClass();
    $response->lunarphase = $moon;

    return $response;
}


$app->get("/moon/:function(/(:$zipcode))", function ($function, $zipcode='60606') use ($app) {
   /* if(is_callable($function)) {
        $url = "https://theeyestudio.com/zip/".$zipcode;

        $response = getCurl($url);

        $timezone = $response["results"]["timezone"];
        date_default_timezone_set($timezone);

        $result = call_user_func($function);

        $response = $app->response();
        $response->header("Access-Control-Allow-Origin", "*");

        $app->render(200,array(
                "moon" => $result,
                "zipcode" => $zipcode,
                "timezone" => $timezone,
            ));
    }*/
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