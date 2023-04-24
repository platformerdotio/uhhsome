<?php 

	$deny = array("10.115.41.189"); // To add more IP's array("127.0.0.1", "127.0.0.2", "127.0.0.3")
	if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
	   header("location: http://platformerdotio.github.io/banned/banlist.php"); // Page to redirect banned users to (/banned/ by default)
	   exit();
	}

?>
