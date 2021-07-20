<!-- <script src="https://data.web.unc.edu/"></script> -->

<?php
//reading JSON file contents
$eventData = file_get_contents("./newEvents.json");
//converting JSON file contents to PHP associative array
$jsonArray = json_decode($eventData, true);

//service url
 $url = 'https://data.web.unc.edu/';
 //initializing curl session with service url as parameter
 $curl = curl_init($url);
 //setting the JSON content-type 
 curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
 //sending the request 
 curl_exec($curl);
 ?>

