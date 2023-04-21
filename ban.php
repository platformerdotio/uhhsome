<?php $deny = array("10.115.41.76");
if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: https://www.google.com/");
   exit();
} ?>
