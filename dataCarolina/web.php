<?php
$newEventsContents = file_get_contents("./newEvents.json");
$newEventsArray = json_decode(newEventsJSON, true);
?>
 var nEvents = <?php echo newEventsContents; ?>;
<?php echo nEvents?>
