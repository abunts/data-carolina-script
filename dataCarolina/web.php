<script src="https://data.web.unc.edu/"></script>
<?php
//reading JSON file contents
$data = file_get_contents("./newEvents.json");
//converting JSON file contents to PHP associative array
$data = json_decode($data, true);
 echo '<pre>';
 print_r($data);
 ?>



