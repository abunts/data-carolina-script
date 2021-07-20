<?php
//reading JSON file contents
$data = file_get_contents("./newEvents.json");
//converting JSON file contents to PHP associative array
$newEventsArray = json_decode(data, true);
?>

//echo data while defining a JS variable

var nEvents = <?php echo data;?>
console.log(nEvents);


